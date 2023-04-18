using System.Text.Json.Serialization;

namespace MyTestWeb.Models;

    public class DocumentModel
    {
        [JsonPropertyName("document")]
        public LoginInfoResponseModel Document { get; set; }
    }
