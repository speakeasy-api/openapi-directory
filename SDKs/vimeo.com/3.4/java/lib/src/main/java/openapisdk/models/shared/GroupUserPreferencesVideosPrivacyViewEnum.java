package openapisdk.models.shared;


public enum GroupUserPreferencesVideosPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private GroupUserPreferencesVideosPrivacyViewEnum(String value) {
        this.value = value;
    }
}
