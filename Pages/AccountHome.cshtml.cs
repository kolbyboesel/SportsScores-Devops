using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;
using MyTestWeb.Models;
using RestSharp;

namespace MyTestWeb.Pages
{
    public class AccountHomeModel : PageModel
    {
        private readonly ILogger<AccountHomeModel> _logger;

        public AccountHomeModel(ILogger<AccountHomeModel> logger)
        {
            _logger = logger;
        }

        public async Task OnGet()
        {
            var verifyPaid = Request.Cookies["PaidConfirm"];
            var changedPassword = Request.Cookies["ChangedPassword"];
            var changedEmail = Request.Cookies["ChangedEmail"];
            var signedUp = Request.Cookies["signedUp"];
            var loggedIn = Request.Cookies["loggedIn"];
            if(verifyPaid == "Yes"){
                if(changedPassword == "yes"){
                    ViewData["successAcc"] = "Password changed successfully!";
                    Response.Cookies.Delete("ChangedPassword");
                }
                if(changedEmail == "yes"){
                    ViewData["successAcc"] = "Email changed successfully!";
                    Response.Cookies.Delete("ChangedEmail");
                }
                if(signedUp == "yes"){
                    ViewData["successAcc"] = "Account created successfully!";
                    Response.Cookies.Delete("signedUp");
                }
                if(loggedIn == "yes"){
                    ViewData["successAcc"] = "Successfully logged in!";
                    Response.Cookies.Delete("loggedIn");
                }
            }
            else{
                 Response.Redirect("/Payment");
            }
        }
    }
}