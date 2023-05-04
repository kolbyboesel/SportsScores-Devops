using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Configuration;
namespace MyTestWeb;

static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddRazorPages();

        builder.Services.AddSession(options => {
            options.IdleTimeout = TimeSpan.FromMinutes(30);
            });
        builder.Services.AddMemoryCache();
        builder.Services.AddMvc();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();
        
        app.UseStaticFiles();
        app.UseSession();
        app.UseEndpoints(endpoints => {
            endpoints.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");
        });

        app.MapRazorPages();
        app.MapDefaultControllerRoute();

        app.Run();
    }
}