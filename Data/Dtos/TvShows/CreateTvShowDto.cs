using System.ComponentModel.DataAnnotations;

namespace Project.Data.Dtos.TvShows
{
    public record CreateTvShowDto([Required]string Name, [Required] string Description, [Required] string Review, [Required] string Genre, [Required] int ReleaseYear, [Required] string Image);

}
