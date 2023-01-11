using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Data.Dtos.TvShows;
using Project.Data.Entities;
using Project.Data.Repositories;

namespace Project.Controllers
{


    [ApiController]
    [Route("api/tvshows")]
    public class TvShowsController : ControllerBase
    {
        private readonly ITvShowsRepository _tvShowsRepository;
        private readonly IMapper _mapper;

        public TvShowsController(ITvShowsRepository tvShowsRepository, IMapper mapper)
        {
            _tvShowsRepository = tvShowsRepository;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IEnumerable<TvShowDto>> GetAll()
        {
            return (await _tvShowsRepository.GetAll()).Select(o => _mapper.Map<TvShowDto>(o));
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<TvShowDto>> Get(int id)
        {
            var tvShow = await _tvShowsRepository.Get(id);

            if (tvShow == null) return NotFound("Tv show with id '{id}' not found."); 
            
            return Ok(_mapper.Map<TvShowDto>(tvShow));
        }

        [HttpPost]
        public async Task<ActionResult<TvShowDto>> Post(CreateTvShowDto tvShowDto)
        {
            var tvShow =  _mapper.Map<TvShow>(tvShowDto);

            await _tvShowsRepository.Create(tvShow);

            return Created($"/api/tvshows/{tvShow.Id}", _mapper.Map<TvShowDto>(tvShow));
        }
    }
}
