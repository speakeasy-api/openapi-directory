package openapisdk.models.operations;


public enum SongListApiGetSongsSortEnum {
    NONE("None"),
    NAME("Name"),
    ADDITION_DATE("AdditionDate"),
    PUBLISH_DATE("PublishDate"),
    FAVORITED_TIMES("FavoritedTimes"),
    RATING_SCORE("RatingScore"),
    TAG_USAGE_COUNT("TagUsageCount");

    public final String value;

    private SongListApiGetSongsSortEnum(String value) {
        this.value = value;
    }
}
