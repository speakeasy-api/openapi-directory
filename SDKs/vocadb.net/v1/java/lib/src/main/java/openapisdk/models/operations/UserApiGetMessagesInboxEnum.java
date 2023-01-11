package openapisdk.models.operations;


public enum UserApiGetMessagesInboxEnum {
    NOTHING("Nothing"),
    RECEIVED("Received"),
    SENT("Sent"),
    NOTIFICATIONS("Notifications");

    public final String value;

    private UserApiGetMessagesInboxEnum(String value) {
        this.value = value;
    }
}
