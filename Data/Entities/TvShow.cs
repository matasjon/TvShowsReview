namespace Project.Data.Entities
{
    public class TvShow
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Review { get; set; }
        public string Genre { get; set; }

        public int ReleaseYear { get; set; }

        public string Image { get; set; }

        public DateTime CreationTimeUtc { get; set; }

    }
}
