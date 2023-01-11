package openapisdk.models.operations;


public enum UploadVideoRequestBodyPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private UploadVideoRequestBodyPrivacyViewEnum(String value) {
        this.value = value;
    }
}
