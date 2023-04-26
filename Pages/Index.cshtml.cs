using Microsoft.AspNetCore.Mvc;
using MyTestWeb.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {   
            
            if (Request.Cookies["loggedInStatus"] == null)
            {
            var cookieOptions = new CookieOptions();
            cookieOptions.Path = "/";
            cookieOptions.Expires = DateTime.Now.AddMinutes(10);
            Response.Cookies.Append("loggedInStatus", "false", cookieOptions);
            }
        }
    }
}