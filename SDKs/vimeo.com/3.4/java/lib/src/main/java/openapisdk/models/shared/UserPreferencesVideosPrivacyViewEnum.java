package openapisdk.models.shared;


public enum UserPreferencesVideosPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private UserPreferencesVideosPrivacyViewEnum(String value) {
        this.value = value;
    }
}
