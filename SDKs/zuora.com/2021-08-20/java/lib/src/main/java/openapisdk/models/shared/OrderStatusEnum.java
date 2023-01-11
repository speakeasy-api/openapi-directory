package openapisdk.models.shared;


public enum OrderStatusEnum {
    COMPLETED("Completed"),
    PENDING("Pending");

    public final String value;

    private OrderStatusEnum(String value) {
        this.value = value;
    }
}
