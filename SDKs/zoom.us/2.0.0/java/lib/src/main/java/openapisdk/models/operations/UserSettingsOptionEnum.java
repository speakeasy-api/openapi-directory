package openapisdk.models.operations;


public enum UserSettingsOptionEnum {
    MEETING_AUTHENTICATION("meeting_authentication"),
    RECORDING_AUTHENTICATION("recording_authentication");

    public final String value;

    private UserSettingsOptionEnum(String value) {
        this.value = value;
    }
}
