package openapisdk.models.shared;


public enum GetPaymentRunDataTransactionElementResponseStatusEnum {
    PROCESSED("Processed"),
    PROCESSING("Processing"),
    ERROR("Error");

    public final String value;

    private GetPaymentRunDataTransactionElementResponseStatusEnum(String value) {
        this.value = value;
    }
}
