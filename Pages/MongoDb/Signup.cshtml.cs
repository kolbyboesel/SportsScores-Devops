using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MyTestWeb.Pages.MongoDb;

public class SignupModel : PageModel
{
    private IMongoCollection<User> _newUser;
    public async Task OnGet()
    {

    }
    public async Task OnPostAsync()
    {
        const string connectionUri = "mongodb+srv://kolbyzboesel:Kolby344@sportsscores.anxznpk.mongodb.net/?retryWrites=true&w=majority";
        var settings = MongoClientSettings.FromConnectionString(connectionUri);
        settings.ServerApi = new ServerApi(ServerApiVersion.V1);
        var client = new MongoClient(settings);
        var usersList = client.GetDatabase("Login_Data");
        _newUser = usersList.GetCollection<User>("Login_Info");

        var username = Request.Form["username"];
        var password = Request.Form["password"];
        var confirm_password = Request.Form["password-repeat"];

        var filter = Builders<User>.Filter
            .Eq(r => r.LoginID, username.ToString());

        if(username.ToString().Contains("@")){
            if (_newUser.Find(filter).FirstOrDefault() == null)
            {
            if (password == confirm_password)
            {
                User newUser = new()
                {
                    LoginID = username,
                    PasswordID = password,
                    PaidConfirm = "No",
                };

                await _newUser.InsertOneAsync(newUser);
                Response.Cookies.Append("CurrentUser", username);
                Response.Cookies.Append("CurrentPassword", password);
                Response.Cookies.Append("PaidConfirm", "No");
                Response.Cookies.Append("signedUp", "yes");
                Response.Redirect("/Payment");
            }
            else
            {
                ViewData["ErrorMessageSgnUp"] = "Passwords do not match";
            }
            }
            else
            {
                ViewData["ErrorMessageSgnUp"] = "Username already taken";
            }
        }else{
            ViewData["ErrorMessageSgnUp"] = "Error: Invalid username format";

        }
    }

}

    public class User
    {

        public ObjectId _id { get; set; }
        public string LoginID { get; set; }
        public string PasswordID { get; set; }
        public string PaidConfirm { get; set; }


    }