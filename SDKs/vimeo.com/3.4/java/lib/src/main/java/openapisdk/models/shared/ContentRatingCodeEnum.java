package openapisdk.models.shared;


public enum ContentRatingCodeEnum {
    DRUGS("drugs"),
    LANGUAGE("language"),
    NUDITY("nudity"),
    SAFE("safe"),
    UNRATED("unrated"),
    VIOLENCE("violence");

    public final String value;

    private ContentRatingCodeEnum(String value) {
        this.value = value;
    }
}
