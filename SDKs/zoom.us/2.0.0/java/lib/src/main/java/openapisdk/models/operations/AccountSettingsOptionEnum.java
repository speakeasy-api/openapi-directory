package openapisdk.models.operations;


public enum AccountSettingsOptionEnum {
    MEETING_AUTHENTICATION("meeting_authentication"),
    RECORDING_AUTHENTICATION("recording_authentication");

    public final String value;

    private AccountSettingsOptionEnum(String value) {
        this.value = value;
    }
}
