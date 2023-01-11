package openapisdk.models.shared;


public enum VideoMetadataInteractionsBuyDownloadEnum {
    AVAILABLE("available"),
    PURCHASED("purchased"),
    RESTRICTED("restricted"),
    UNAVAILABLE("unavailable");

    public final String value;

    private VideoMetadataInteractionsBuyDownloadEnum(String value) {
        this.value = value;
    }
}
