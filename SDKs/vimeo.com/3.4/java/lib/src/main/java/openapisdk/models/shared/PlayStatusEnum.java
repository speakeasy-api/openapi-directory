package openapisdk.models.shared;


public enum PlayStatusEnum {
    PLAYABLE("playable"),
    PURCHASE_REQUIRED("purchase_required"),
    RESTRICTED("restricted"),
    UNAVAILABLE("unavailable");

    public final String value;

    private PlayStatusEnum(String value) {
        this.value = value;
    }
}
