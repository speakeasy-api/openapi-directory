package openapisdk.models.operations;


public enum SongApiGetRelatedLangEnum {
    DEFAULT_("Default"),
    JAPANESE("Japanese"),
    ROMAJI("Romaji"),
    ENGLISH("English");

    public final String value;

    private SongApiGetRelatedLangEnum(String value) {
        this.value = value;
    }
}
