package openapisdk.models.operations;


public enum TagApiGetListTargetEnum {
    NOTHING("Nothing"),
    ALBUM("Album"),
    ARTIST("Artist"),
    ALBUM_ARTIST("AlbumArtist"),
    EVENT("Event"),
    SONG("Song"),
    ALBUM_SONG("AlbumSong"),
    ARTIST_SONG("ArtistSong"),
    ALL("All");

    public final String value;

    private TagApiGetListTargetEnum(String value) {
        this.value = value;
    }
}
