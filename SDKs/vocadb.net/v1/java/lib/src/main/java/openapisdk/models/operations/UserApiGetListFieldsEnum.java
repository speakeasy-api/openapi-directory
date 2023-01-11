package openapisdk.models.operations;


public enum UserApiGetListFieldsEnum {
    NONE("None"),
    KNOWN_LANGUAGES("KnownLanguages"),
    MAIN_PICTURE("MainPicture"),
    OLD_USERNAMES("OldUsernames");

    public final String value;

    private UserApiGetListFieldsEnum(String value) {
        this.value = value;
    }
}
