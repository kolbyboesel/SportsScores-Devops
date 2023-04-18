using System.ComponentModel.DataAnnotations;

namespace MyTestWeb.Models;

public class MongoDbRequestModel
{
    public string collection { get; set; }
    public string database { get; set; }
    public string dataSource { get; set; }
}