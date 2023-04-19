using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class AccountHomeModel : PageModel
    {
        private readonly ILogger<AccountHomeModel> _logger;

        public AccountHomeModel(ILogger<AccountHomeModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}