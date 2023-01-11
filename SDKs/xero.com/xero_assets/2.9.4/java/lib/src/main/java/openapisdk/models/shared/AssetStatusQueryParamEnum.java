package openapisdk.models.shared;


public enum AssetStatusQueryParamEnum {
    DRAFT("DRAFT"),
    REGISTERED("REGISTERED"),
    DISPOSED("DISPOSED");

    public final String value;

    private AssetStatusQueryParamEnum(String value) {
        this.value = value;
    }
}
