package openapisdk.models.shared;


public enum TransactionStatusEnum {
    POSTED("POSTED"),
    PENDING("PENDING"),
    SCHEDULED("SCHEDULED"),
    FAILED("FAILED"),
    CLEARED("CLEARED");

    public final String value;

    private TransactionStatusEnum(String value) {
        this.value = value;
    }
}
