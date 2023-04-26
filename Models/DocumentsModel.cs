using System.Text.Json.Serialization;

namespace MyTestWeb.Models;

    public class DocumentsModel
    {
        [JsonPropertyName("documents")]
        public List<LoginInfoResponseModel> Documents { get; set; }
    }
