using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyTestWeb.Controllers
{
    public class SessionController : ControllerBase
    {

        public IActionResult Index() 
        {
            return Content(HttpContext.Session.GetString("isLoggedIn"));
        }
        [HttpGet]
        public string getUsername(){
            if(string.IsNullOrWhiteSpace(HttpContext.Session.GetString(SessionVariables.SessionIsLoggedIn)))
            {
                return HttpContext.Session.GetString(SessionVariables.SessionUser);
            }
            return null;
        }

        [HttpGet]
        public string isLoggedIn(){
            if(string.IsNullOrWhiteSpace(HttpContext.Session.GetString(SessionVariables.SessionIsLoggedIn)))
            {
                return HttpContext.Session.GetString(SessionVariables.SessionIsLoggedIn);
            }
            return "false";
        }

        [HttpPut]
        public void setCurrentUser(string username){
            
            HttpContext.Session.SetString(SessionVariables.SessionUser, username);
            
        }

        public void setIsLoggedIn(){
            
            HttpContext.Session.SetString(SessionVariables.SessionIsLoggedIn, "true");
            
        }

        public void setIsLoggedOut(){
            if(string.IsNullOrWhiteSpace(HttpContext.Session.GetString(SessionVariables.SessionIsLoggedIn)))
            {
                HttpContext.Session.SetString(SessionVariables.SessionIsLoggedIn, "false");
            }
        }
    }
}