package openapisdk.models.operations;


public enum PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum {
    PROCESSING("Processing"),
    PROCESSED("Processed"),
    ERROR("Error"),
    CANCELED("Canceled");

    public final String value;

    private PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum(String value) {
        this.value = value;
    }
}
