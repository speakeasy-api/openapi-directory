package openapisdk.models.shared;


public enum AssetStatusEnum {
    DRAFT("Draft"),
    REGISTERED("Registered"),
    DISPOSED("Disposed");

    public final String value;

    private AssetStatusEnum(String value) {
        this.value = value;
    }
}
