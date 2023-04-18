using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class MLBModel : PageModel
    {
        private readonly ILogger<MLBModel> _logger;

        public MLBModel(ILogger<MLBModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}