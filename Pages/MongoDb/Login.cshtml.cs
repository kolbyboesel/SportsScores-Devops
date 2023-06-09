using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using MyTestWeb.Models;
using RestSharp;

namespace MyTestWeb.Pages.MongoDb;

public class LoginModel : PageModel
{
    public LoginInfoResponseModel FindOneModel { get; set; }
    public List<LoginInfoResponseModel> FindModel { get; set; }

    public async Task OnGet()
    {
        var response = await FindOne();
        var documentModel = JsonSerializer.Deserialize<DocumentModel>(response.Content);
        FindOneModel = documentModel.Document;

        response = await Find();
        var documentsModel = JsonSerializer.Deserialize<DocumentsModel>(response.Content);
        FindModel = documentsModel.Documents;
    }

    private static async Task<RestResponse> FindOne()
    {
        var client = new RestClient("https://eastus2.azure.data.mongodb-api.com/app/data-sdfbt/endpoint/data/v1/action/findOne");
        return await GetData(client);
    }

    private static async Task<RestResponse> Find()
    {
        var client = new RestClient("https://eastus2.azure.data.mongodb-api.com/app/data-sdfbt/endpoint/data/v1/action/find");
        return await GetData(client);
    }

    private static async Task<RestResponse> GetData(RestClient client)
    {
        var request = new RestRequest();
        request.AddHeader("Content-Type", "application/json");
        request.AddHeader("Access-Control-Request-Headers", "*");
        request.AddHeader("api-key", "KjIhB7ZvgPZ9i0DfnrU27gsf7uiWOdq91F8MIacza4y3mg80PI7Vw4xzzGm5B4rp");

        var requestModel = new MongoDbRequestModel
        {
            collection = "Login_Info",
            dataSource = "SportsScores",
            database = "Login_Data",
        };

        var body = JsonSerializer.Serialize(requestModel);
        request.AddStringBody(body, DataFormat.Json);
        var response = await client.PostAsync(request);
        return response;
    }

    public async Task OnPostAsync()
    {
        var username = Request.Form["uname"];
        var password = Request.Form["psw"];

        // Retrieve the user's data from MongoDB
        var client = new RestClient("https://eastus2.azure.data.mongodb-api.com/app/data-sdfbt/endpoint/data/v1/action/find");
        var response = await GetData(client);

        if (response != null)
        {
            var users = JsonSerializer.Deserialize<DocumentsModel>(response.Content);
            var currentUser = users.Documents.FirstOrDefault(x => string.Equals(x.LoginId, username, StringComparison.OrdinalIgnoreCase));

            if (currentUser == null)
            {
                ViewData["ErrorMessage"] = "Invalid username";
            }
            else
            {
                if (currentUser.PasswordId == password && currentUser.PaidConfirm == "Yes")
                {
                    Response.Cookies.Append("loggedInStatus", "true");
                    Response.Cookies.Append("PaidConfirm", "Yes");
                    Response.Cookies.Append("CurrentUser", username);
                    Response.Cookies.Append("loggedIn", "yes");
                    Response.Redirect("/AccountHome");
                } else if(currentUser.PaidConfirm == "No")
                {
                    Response.Cookies.Append("PaidConfirm", "No");
                    Response.Redirect("/Payment");
                }
                else{
                    ViewData["ErrorMessage"] = "Invalid password";
                }
            }
        }
    }
}

