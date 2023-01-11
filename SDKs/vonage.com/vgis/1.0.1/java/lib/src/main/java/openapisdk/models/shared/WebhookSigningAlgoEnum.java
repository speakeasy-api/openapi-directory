package openapisdk.models.shared;


public enum WebhookSigningAlgoEnum {
    HMAC_SHA256("HMAC_SHA256"),
    NONE("NONE");

    public final String value;

    private WebhookSigningAlgoEnum(String value) {
        this.value = value;
    }
}
