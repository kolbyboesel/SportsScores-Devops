using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyTestWeb.Models;
using RestSharp;
using System.Linq;

namespace MyTestWeb.Pages;

public class SignoutModel : PageModel
{
    public void OnGet()
        {
            Response.Cookies.Delete("loggedInStatus");
            Response.Redirect("/Index");
        }
}