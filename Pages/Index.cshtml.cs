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
        }
    }
}