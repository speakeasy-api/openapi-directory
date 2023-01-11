package openapisdk.models.operations;


public enum UpdateGroupSettingsOptionEnum {
    MEETING_AUTHENTICATION("meeting_authentication"),
    RECORDING_AUTHENTICATION("recording_authentication"),
    MEETING_SECURITY("meeting_security");

    public final String value;

    private UpdateGroupSettingsOptionEnum(String value) {
        this.value = value;
    }
}
