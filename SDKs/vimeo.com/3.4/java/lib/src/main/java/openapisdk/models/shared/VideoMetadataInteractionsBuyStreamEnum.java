package openapisdk.models.shared;


public enum VideoMetadataInteractionsBuyStreamEnum {
    AVAILABLE("available"),
    PURCHASED("purchased"),
    RESTRICTED("restricted"),
    UNAVAILABLE("unavailable");

    public final String value;

    private VideoMetadataInteractionsBuyStreamEnum(String value) {
        this.value = value;
    }
}
