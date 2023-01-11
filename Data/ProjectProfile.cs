using AutoMapper;
using Project.Data.Dtos.TvShows;
using Project.Data.Entities;

namespace Project.Data
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<TvShow, TvShowDto>();
            CreateMap<CreateTvShowDto, TvShow>();
        
        }

    }
}
