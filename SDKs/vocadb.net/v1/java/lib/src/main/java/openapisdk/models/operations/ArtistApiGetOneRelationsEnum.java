package openapisdk.models.operations;


public enum ArtistApiGetOneRelationsEnum {
    NONE("None"),
    LATEST_ALBUMS("LatestAlbums"),
    LATEST_EVENTS("LatestEvents"),
    LATEST_SONGS("LatestSongs"),
    POPULAR_ALBUMS("PopularAlbums"),
    POPULAR_SONGS("PopularSongs"),
    ALL("All");

    public final String value;

    private ArtistApiGetOneRelationsEnum(String value) {
        this.value = value;
    }
}
