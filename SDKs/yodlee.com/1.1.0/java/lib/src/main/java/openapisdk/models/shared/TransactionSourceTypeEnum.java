package openapisdk.models.shared;


public enum TransactionSourceTypeEnum {
    AGGREGATED("AGGREGATED"),
    MANUAL("MANUAL");

    public final String value;

    private TransactionSourceTypeEnum(String value) {
        this.value = value;
    }
}
