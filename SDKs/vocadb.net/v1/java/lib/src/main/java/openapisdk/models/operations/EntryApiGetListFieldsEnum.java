package openapisdk.models.operations;


public enum EntryApiGetListFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    DESCRIPTION("Description"),
    MAIN_PICTURE("MainPicture"),
    NAMES("Names"),
    P_VS("PVs"),
    TAGS("Tags"),
    WEB_LINKS("WebLinks");

    public final String value;

    private EntryApiGetListFieldsEnum(String value) {
        this.value = value;
    }
}
