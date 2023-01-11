package openapisdk.models.operations;


public enum TagApiGetListFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    ALIASED_TO("AliasedTo"),
    DESCRIPTION("Description"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    PARENT("Parent"),
    RELATED_TAGS("RelatedTags"),
    TRANSLATED_DESCRIPTION("TranslatedDescription"),
    WEB_LINKS("WebLinks");

    public final String value;

    private TagApiGetListFieldsEnum(String value) {
        this.value = value;
    }
}
