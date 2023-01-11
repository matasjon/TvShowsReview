using Microsoft.EntityFrameworkCore;
using Project.Data.Entities;

namespace Project.Data
{
    public class ProjectContext : DbContext
    {
        public DbSet<TvShow> TvShows { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog =Project");
        }

    }
}
