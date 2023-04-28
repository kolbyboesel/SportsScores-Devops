using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MyTestWeb.Pages;

public class ChangeEmailModel : PageModel
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

        var newEmail = Request.Form["email"];
        var confirmEmail = Request.Form["confirmEmail"];
        var password = Request.Form["password"];
        
        if(newEmail.ToString().Contains("@")){
            if(newEmail == confirmEmail){
                if(oldPassword == password){
                    User updateUser = new()
                    {
                        _id = oldId,
                        LoginID = newEmail,
                        PasswordID = oldPassword,
                        PaidConfirm = "Yes",
                    };

                    await _newUser.ReplaceOneAsync(filter, updateUser);

                    Response.Cookies.Append("CurrentUser", newEmail);
                    Response.Redirect("/AccountHome");
                } else {
                    ViewData["ErrorMessageCE"] = "Error: Incorrect password";

                }
            }else{
                ViewData["ErrorMessageCE"] = "Error: Email does not match";
            }
        } else {
            ViewData["ErrorMessageCE"] = "Error: Invalid email format";
        }
    }
}
