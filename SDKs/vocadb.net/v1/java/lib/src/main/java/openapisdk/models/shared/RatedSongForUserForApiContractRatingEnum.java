package openapisdk.models.shared;


public enum RatedSongForUserForApiContractRatingEnum {
    NOTHING("Nothing"),
    DISLIKE("Dislike"),
    LIKE("Like"),
    FAVORITE("Favorite");

    public final String value;

    private RatedSongForUserForApiContractRatingEnum(String value) {
        this.value = value;
    }
}
