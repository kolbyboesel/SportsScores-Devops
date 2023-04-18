using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class NFLModel : PageModel
    {
        private readonly ILogger<NFLModel> _logger;

        public NFLModel(ILogger<NFLModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}