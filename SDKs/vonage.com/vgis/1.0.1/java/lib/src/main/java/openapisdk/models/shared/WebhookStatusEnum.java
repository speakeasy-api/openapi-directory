package openapisdk.models.shared;


public enum WebhookStatusEnum {
    ACTIVE("ACTIVE"),
    PAUSED("PAUSED");

    public final String value;

    private WebhookStatusEnum(String value) {
        this.value = value;
    }
}
