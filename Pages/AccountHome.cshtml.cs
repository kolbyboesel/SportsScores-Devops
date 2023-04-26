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
            
            if(verifyPaid == "Yes"){
            }
            else{
                 Response.Redirect("/Payment");
            }
        }
    }
}