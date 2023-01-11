package openapisdk.models.shared;


public enum ProviderDetailStatusEnum {
    SUPPORTED("Supported"),
    BETA("Beta"),
    UNSUPPORTED("Unsupported");

    public final String value;

    private ProviderDetailStatusEnum(String value) {
        this.value = value;
    }
}
