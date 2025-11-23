using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddMcpServer()
    .WithToolsFromAssembly()
    .WithPromptsFromAssembly();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowedFrontend", builder =>
    {
        builder
            .WithOrigins(
                "https://botdigital.info",
                "https://staging.botdigital.info",
                "http://localhost:19006")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseCors("AllowedFrontend");

app.MapMcp();
app.MapGet("/", () => "Hello World! This is a Model Context Protocol server.");

app.Run();