package openapisdk.models.operations;


public enum ReleaseEventApiGetListCategoryEnum {
    UNSPECIFIED("Unspecified"),
    ALBUM_RELEASE("AlbumRelease"),
    ANNIVERSARY("Anniversary"),
    CLUB("Club"),
    CONCERT("Concert"),
    CONTEST("Contest"),
    CONVENTION("Convention"),
    OTHER("Other");

    public final String value;

    private ReleaseEventApiGetListCategoryEnum(String value) {
        this.value = value;
    }
}
