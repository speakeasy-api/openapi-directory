package openapisdk.models.shared;


public enum VideoUserPreferencesVideosPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private VideoUserPreferencesVideosPrivacyViewEnum(String value) {
        this.value = value;
    }
}
