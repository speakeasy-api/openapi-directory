package openapisdk.models.shared;


public enum DataExtractsTransactionStatusEnum {
    POSTED("POSTED"),
    PENDING("PENDING"),
    SCHEDULED("SCHEDULED"),
    FAILED("FAILED"),
    CLEARED("CLEARED");

    public final String value;

    private DataExtractsTransactionStatusEnum(String value) {
        this.value = value;
    }
}
