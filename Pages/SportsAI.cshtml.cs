using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RestSharp;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text.Json;
public class SportsAIModel : PageModel
{
    [BindProperty]
    public string UserInput { get; set; }
    public async Task OnPostAsync()
    {
    }
}