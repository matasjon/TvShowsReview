using Microsoft.EntityFrameworkCore;
using Project.Data.Entities;
using System.Diagnostics;

namespace Project.Data.Repositories
{
    public interface ITvShowsRepository
    {
        Task Create(TvShow tvShow);
        Task<TvShow> Get(int id);
        Task<List<TvShow>> GetAll();
    }

    public class TvShowsRepository : ITvShowsRepository
    {
        private readonly ProjectContext _projectContext;

        public TvShowsRepository(ProjectContext projectContext)
        {
            _projectContext = projectContext;
        }


        public async Task<List<TvShow>> GetAll()
        {
            return await _projectContext.TvShows.ToListAsync();
        }

        public async Task<TvShow> Get(int id)
        {
            return await _projectContext.TvShows.FirstOrDefaultAsync(o => o.Id == id);
        }


        public async Task Create(TvShow tvShow)
        {
            _projectContext.TvShows.Add(tvShow);
            await _projectContext.SaveChangesAsync();
        }

    }
}
