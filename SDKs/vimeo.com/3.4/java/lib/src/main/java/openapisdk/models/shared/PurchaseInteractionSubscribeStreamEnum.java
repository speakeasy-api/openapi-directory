package openapisdk.models.shared;


public enum PurchaseInteractionSubscribeStreamEnum {
    AVAILABLE("available"),
    PURCHASED("purchased"),
    RESTRICTED("restricted"),
    UNAVAILABLE("unavailable");

    public final String value;

    private PurchaseInteractionSubscribeStreamEnum(String value) {
        this.value = value;
    }
}
