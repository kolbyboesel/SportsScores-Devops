using System.Text.Json.Serialization;

namespace MyTestWeb.Models;

public class LoginInfoResponseModel
{
    [JsonPropertyName("_id")]
    public int Id { get; set; }
    
    [JsonPropertyName("LoginID")]
    public string LoginId { get; set; }
    
    [JsonPropertyName("PasswordID")]
    public string PasswordId { get; set; }
}

