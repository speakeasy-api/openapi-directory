package openapisdk.models.shared;


public enum ChannelPrivacyViewEnum {
    ANYBODY("anybody"),
    MODERATORS("moderators"),
    USERS("users");

    public final String value;

    private ChannelPrivacyViewEnum(String value) {
        this.value = value;
    }
}
