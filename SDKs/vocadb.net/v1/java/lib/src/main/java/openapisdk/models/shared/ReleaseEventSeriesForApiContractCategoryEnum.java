package openapisdk.models.shared;


public enum ReleaseEventSeriesForApiContractCategoryEnum {
    UNSPECIFIED("Unspecified"),
    ALBUM_RELEASE("AlbumRelease"),
    ANNIVERSARY("Anniversary"),
    CLUB("Club"),
    CONCERT("Concert"),
    CONTEST("Contest"),
    CONVENTION("Convention"),
    OTHER("Other");

    public final String value;

    private ReleaseEventSeriesForApiContractCategoryEnum(String value) {
        this.value = value;
    }
}
