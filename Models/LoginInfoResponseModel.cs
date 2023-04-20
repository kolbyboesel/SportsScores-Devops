using System.Text.Json.Serialization;

namespace MyTestWeb.Models;

public class LoginInfoResponseModel
{

    [JsonPropertyName("LoginID")]
    public string LoginId { get; set; }
    
    [JsonPropertyName("PasswordID")]
    public string PasswordId { get; set; }
}

