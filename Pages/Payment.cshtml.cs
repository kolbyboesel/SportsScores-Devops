using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using System.Linq;

namespace MyTestWeb.Pages;

public class PaymentModel : PageModel
{
    public async Task OnGet()   
    {
        Response.Cookies.Append("loggedInStatus", "true");
    }
}