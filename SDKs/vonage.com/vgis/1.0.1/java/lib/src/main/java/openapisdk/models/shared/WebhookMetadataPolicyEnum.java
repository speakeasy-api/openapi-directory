package openapisdk.models.shared;


public enum WebhookMetadataPolicyEnum {
    NONE("NONE"),
    HEADER("HEADER"),
    BODY("BODY");

    public final String value;

    private WebhookMetadataPolicyEnum(String value) {
        this.value = value;
    }
}
