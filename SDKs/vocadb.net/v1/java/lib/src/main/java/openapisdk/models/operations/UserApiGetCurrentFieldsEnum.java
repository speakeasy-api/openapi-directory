package openapisdk.models.operations;


public enum UserApiGetCurrentFieldsEnum {
    NONE("None"),
    KNOWN_LANGUAGES("KnownLanguages"),
    MAIN_PICTURE("MainPicture"),
    OLD_USERNAMES("OldUsernames");

    public final String value;

    private UserApiGetCurrentFieldsEnum(String value) {
        this.value = value;
    }
}
