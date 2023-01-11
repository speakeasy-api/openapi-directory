package openapisdk.models.operations;


public enum UserApiGetRatedSongsRatingEnum {
    NOTHING("Nothing"),
    DISLIKE("Dislike"),
    LIKE("Like"),
    FAVORITE("Favorite");

    public final String value;

    private UserApiGetRatedSongsRatingEnum(String value) {
        this.value = value;
    }
}
