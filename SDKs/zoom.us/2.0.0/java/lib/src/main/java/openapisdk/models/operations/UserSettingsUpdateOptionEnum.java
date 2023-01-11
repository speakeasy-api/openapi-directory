package openapisdk.models.operations;


public enum UserSettingsUpdateOptionEnum {
    MEETING_AUTHENTICATION("meeting_authentication"),
    RECORDING_AUTHENTICATION("recording_authentication"),
    MEETING_SECUIRTY("meeting_secuirty");

    public final String value;

    private UserSettingsUpdateOptionEnum(String value) {
        this.value = value;
    }
}
