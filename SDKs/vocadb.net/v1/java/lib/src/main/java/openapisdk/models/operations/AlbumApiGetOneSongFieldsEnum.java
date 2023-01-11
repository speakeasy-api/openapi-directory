package openapisdk.models.operations;


public enum AlbumApiGetOneSongFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    ALBUMS("Albums"),
    ARTISTS("Artists"),
    LYRICS("Lyrics"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    P_VS("PVs"),
    RELEASE_EVENT("ReleaseEvent"),
    TAGS("Tags"),
    THUMB_URL("ThumbUrl"),
    WEB_LINKS("WebLinks");

    public final String value;

    private AlbumApiGetOneSongFieldsEnum(String value) {
        this.value = value;
    }
}
