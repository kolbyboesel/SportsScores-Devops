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
        // Replace YOUR_API_KEY with your actual OpenAI API key
        string apiKey = "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";
        string endpoint = "https://api.openai.com/v1/completions";

        var client = new RestClient(endpoint);
        var request = new RestRequest("POST");
        request.AddHeader("Authorization", $"Bearer {apiKey}");
        request.AddHeader("Content-Type", "application/json");

        var body = new
        {
            prompt = UserInput,
            temperature = 0.7,
            max_tokens = 60,
            n = 1,
            stop = "\n"
        };

        request.AddJsonBody(body);

        RestResponse response = await client.PostAsync(request);

        if (response.StatusCode == System.Net.HttpStatusCode.OK)
        {
            var openAIResponse = JsonSerializer.Deserialize<OpenAIResponse>(response.Content);
            string botResponse = openAIResponse.choices[0].text;
            ViewData["BotResponse"] = botResponse;

        }
        else
        {
            ViewData["BotResponse"] = response.StatusCode;
        }
    }
}


public class OpenAIResponse
{
    public List<OpenAIChoice> choices { get; set; }
    public string created { get; set; }
    public string id { get; set; }
}

public class OpenAIChoice
{
    public float logprobs { get; set; }
    public float[] logprobs_array { get; set; }
    public float finish_reason { get; set; }
    public string text { get; set; }
}