using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MyTestWeb.Pages;

public class ConfirmPaymentModel : PageModel
{

    private IMongoCollection<User> _newUser;

    public async Task OnGet()
    {
        const string connectionUri = "mongodb+srv://kolbyzboesel:Kolby344@sportsscores.anxznpk.mongodb.net/?retryWrites=true&w=majority";
        var settings = MongoClientSettings.FromConnectionString(connectionUri);
        settings.ServerApi = new ServerApi(ServerApiVersion.V1);
        var client = new MongoClient(settings);
        var usersList = client.GetDatabase("Login_Data");
        _newUser = usersList.GetCollection<User>("Login_Info");

        var username = Request.Cookies["CurrentUser"];
        var password = Request.Cookies["CurrentPassword"];

        var filter = Builders<User>.Filter
            .Eq(r => r.LoginID, username.ToString());

        var oldUser = _newUser.Find(filter).First();
        var oldId = oldUser._id;

        User updateUser = new()
        {
            _id = oldId,
            LoginID = username,
            PasswordID = password,
            PaidConfirm = "Yes",
        };

        await _newUser.ReplaceOneAsync(filter, updateUser);

        Response.Cookies.Delete("CurrentPassword");
        Response.Cookies.Delete("PaidConfirm");
        Response.Cookies.Append("PaidConfirm", "Yes");
        Response.Redirect("/AccountHome");
    }
}

public class User
{
    public ObjectId _id { get; set; }
    public string LoginID { get; set; }
    public string PasswordID { get; set; }
    public string PaidConfirm { get; set; }


}