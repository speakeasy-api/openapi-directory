package openapisdk.models.operations;


public enum ReleaseEventApiGetOneFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    ARTISTS("Artists"),
    DESCRIPTION("Description"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    SERIES("Series"),
    SONG_LIST("SongList"),
    TAGS("Tags"),
    VENUE("Venue"),
    WEB_LINKS("WebLinks");

    public final String value;

    private ReleaseEventApiGetOneFieldsEnum(String value) {
        this.value = value;
    }
}
