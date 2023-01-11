package openapisdk.models.shared;


public enum VideoPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private VideoPrivacyViewEnum(String value) {
        this.value = value;
    }
}
