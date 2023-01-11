package openapisdk.models.operations;


public enum SongApiGetDerivedLangEnum {
    DEFAULT_("Default"),
    JAPANESE("Japanese"),
    ROMAJI("Romaji"),
    ENGLISH("English");

    public final String value;

    private SongApiGetDerivedLangEnum(String value) {
        this.value = value;
    }
}
