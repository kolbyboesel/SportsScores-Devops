using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MyTestWeb.Pages;

public class ChangePswModel : PageModel
{

    private IMongoCollection<User> _newUser;

    public async Task OnPostAsync()
    {
        const string connectionUri = "mongodb+srv://kolbyzboesel:Kolby344@sportsscores.anxznpk.mongodb.net/?retryWrites=true&w=majority";
        var settings = MongoClientSettings.FromConnectionString(connectionUri);
        settings.ServerApi = new ServerApi(ServerApiVersion.V1);
        var client = new MongoClient(settings);
        var usersList = client.GetDatabase("Login_Data");
        _newUser = usersList.GetCollection<User>("Login_Info");

        var username = Request.Cookies["CurrentUser"];

        var filter = Builders<User>.Filter
            .Eq(r => r.LoginID, username.ToString());

        var oldUser = _newUser.Find(filter).First();
        var oldId = oldUser._id;
        var oldPassword = oldUser.PasswordID;
        var oldUsername = oldUser.LoginID;

        var oldConfirmPassword = Request.Form["oldPassword"];
        var newPassword = Request.Form["newPassword"];
        var confirmPassword = Request.Form["confirmPassword"];

        if (oldPassword == oldConfirmPassword)
        {
            if (newPassword == confirmPassword)
            {
                User updateUser = new()
                {
                    _id = oldId,
                    LoginID = oldUsername,
                    PasswordID = newPassword,
                    PaidConfirm = "Yes",
                };

                await _newUser.ReplaceOneAsync(filter, updateUser);
                
                Response.Redirect("/AccountHome");
            }
            else
            {
                ViewData["ErrorMessageCE"] = "Error: Passwords do not match";

            }
        }
        else
        {
            ViewData["ErrorMessageCE"] = "Error: Incorrect password";
        }
    }
}
