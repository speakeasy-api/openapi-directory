package openapisdk.models.operations;


public enum SearchVideosFilterEnum {
    CC("CC"),
    CC_BY("CC-BY"),
    CC_BY_NC("CC-BY-NC"),
    CC_BY_NC_ND("CC-BY-NC-ND"),
    CC_BY_NC_SA("CC-BY-NC-SA"),
    CC_BY_ND("CC-BY-ND"),
    CC_BY_SA("CC-BY-SA"),
    CC0("CC0"),
    CATEGORIES("categories"),
    DURATION("duration"),
    IN_PROGRESS("in-progress"),
    MINIMUM_LIKES("minimum_likes"),
    TRENDING("trending"),
    UPLOAD_DATE("upload_date");

    public final String value;

    private SearchVideosFilterEnum(String value) {
        this.value = value;
    }
}
