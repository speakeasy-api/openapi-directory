package openapisdk.models.shared;


public enum UserMessageContractInboxEnum {
    NOTHING("Nothing"),
    RECEIVED("Received"),
    SENT("Sent"),
    NOTIFICATIONS("Notifications");

    public final String value;

    private UserMessageContractInboxEnum(String value) {
        this.value = value;
    }
}
