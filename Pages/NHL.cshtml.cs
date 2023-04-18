using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyTestWeb.Pages
{
    public class NHLModel : PageModel
    {
        private readonly ILogger<NHLModel> _logger;

        public NHLModel(ILogger<NHLModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}