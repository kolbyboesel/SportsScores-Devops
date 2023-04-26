using Microsoft.AspNetCore.Mvc.RazorPages;
namespace MyTestWeb.Pages;

public class PaymentModel : PageModel
{
    public async Task OnGet()
    {
        Response.Cookies.Append("loggedInStatus", "true");
    }

}