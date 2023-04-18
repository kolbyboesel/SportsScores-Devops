using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class NBAModel : PageModel
    {
        private readonly ILogger<NBAModel> _logger;

        public NBAModel(ILogger<NBAModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}