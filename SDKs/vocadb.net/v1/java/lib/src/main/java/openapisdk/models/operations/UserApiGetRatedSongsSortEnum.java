package openapisdk.models.operations;


public enum UserApiGetRatedSongsSortEnum {
    NONE("None"),
    NAME("Name"),
    ADDITION_DATE("AdditionDate"),
    PUBLISH_DATE("PublishDate"),
    FAVORITED_TIMES("FavoritedTimes"),
    RATING_SCORE("RatingScore"),
    RATING_DATE("RatingDate");

    public final String value;

    private UserApiGetRatedSongsSortEnum(String value) {
        this.value = value;
    }
}
