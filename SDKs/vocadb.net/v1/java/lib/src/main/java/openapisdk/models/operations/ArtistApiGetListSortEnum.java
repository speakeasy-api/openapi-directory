package openapisdk.models.operations;


public enum ArtistApiGetListSortEnum {
    NONE("None"),
    NAME("Name"),
    ADDITION_DATE("AdditionDate"),
    ADDITION_DATE_ASC("AdditionDateAsc"),
    RELEASE_DATE("ReleaseDate"),
    SONG_COUNT("SongCount"),
    SONG_RATING("SongRating"),
    FOLLOWER_COUNT("FollowerCount");

    public final String value;

    private ArtistApiGetListSortEnum(String value) {
        this.value = value;
    }
}
