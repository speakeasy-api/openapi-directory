package openapisdk.models.operations;


public enum UserApiGetOneFieldsEnum {
    NONE("None"),
    KNOWN_LANGUAGES("KnownLanguages"),
    MAIN_PICTURE("MainPicture"),
    OLD_USERNAMES("OldUsernames");

    public final String value;

    private UserApiGetOneFieldsEnum(String value) {
        this.value = value;
    }
}
