package openapisdk.models.shared;


public enum ProvidersStatusEnum {
    SUPPORTED("Supported"),
    BETA("Beta"),
    UNSUPPORTED("Unsupported");

    public final String value;

    private ProvidersStatusEnum(String value) {
        this.value = value;
    }
}
