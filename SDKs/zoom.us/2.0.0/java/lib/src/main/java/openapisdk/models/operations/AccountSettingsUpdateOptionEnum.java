package openapisdk.models.operations;


public enum AccountSettingsUpdateOptionEnum {
    MEETING_AUTHENTICATION("meeting_authentication"),
    RECORDING_AUTHENTICATION("recording_authentication"),
    SECURITY("security"),
    MEETING_SECURITY("meeting_security");

    public final String value;

    private AccountSettingsUpdateOptionEnum(String value) {
        this.value = value;
    }
}
