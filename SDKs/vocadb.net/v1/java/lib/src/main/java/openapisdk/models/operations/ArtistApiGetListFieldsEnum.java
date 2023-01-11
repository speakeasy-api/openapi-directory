package openapisdk.models.operations;


public enum ArtistApiGetListFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    ARTIST_LINKS("ArtistLinks"),
    ARTIST_LINKS_REVERSE("ArtistLinksReverse"),
    BASE_VOICEBANK("BaseVoicebank"),
    DESCRIPTION("Description"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    TAGS("Tags"),
    WEB_LINKS("WebLinks");

    public final String value;

    private ArtistApiGetListFieldsEnum(String value) {
        this.value = value;
    }
}
