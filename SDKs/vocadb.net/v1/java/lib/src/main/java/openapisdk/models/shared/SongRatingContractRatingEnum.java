package openapisdk.models.shared;


public enum SongRatingContractRatingEnum {
    NOTHING("Nothing"),
    DISLIKE("Dislike"),
    LIKE("Like"),
    FAVORITE("Favorite");

    public final String value;

    private SongRatingContractRatingEnum(String value) {
        this.value = value;
    }
}
