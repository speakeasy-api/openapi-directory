package openapisdk.models.shared;


public enum GetPaymentRunTypeStatusEnum {
    PENDING("Pending"),
    PROCESSING("Processing"),
    COMPLETED("Completed"),
    ERROR("Error"),
    CANCELED("Canceled");

    public final String value;

    private GetPaymentRunTypeStatusEnum(String value) {
        this.value = value;
    }
}
