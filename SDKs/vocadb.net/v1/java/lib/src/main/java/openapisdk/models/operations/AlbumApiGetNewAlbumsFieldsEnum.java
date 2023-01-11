package openapisdk.models.operations;


public enum AlbumApiGetNewAlbumsFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    ARTISTS("Artists"),
    DESCRIPTION("Description"),
    DISCS("Discs"),
    IDENTIFIERS("Identifiers"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    P_VS("PVs"),
    RELEASE_EVENT("ReleaseEvent"),
    TAGS("Tags"),
    TRACKS("Tracks"),
    WEB_LINKS("WebLinks");

    public final String value;

    private AlbumApiGetNewAlbumsFieldsEnum(String value) {
        this.value = value;
    }
}
