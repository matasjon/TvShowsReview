using Project.Data;
using Project.Data.Repositories;



var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();


builder.Services.AddDbContext<ProjectContext>();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddControllers();


builder.Services.AddTransient<ITvShowsRepository, TvShowsRepository>();



var app = builder.Build();

//app.MapGet("/", () => "Hello World!");

app.UseCors(options=>
{
    options.AllowAnyOrigin().
    AllowAnyMethod().
    AllowAnyHeader();
});

app.MapControllers();

app.Run();
