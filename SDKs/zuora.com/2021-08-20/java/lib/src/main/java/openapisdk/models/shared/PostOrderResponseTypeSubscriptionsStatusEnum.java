package openapisdk.models.shared;


public enum PostOrderResponseTypeSubscriptionsStatusEnum {
    ACTIVE("Active"),
    PENDING_ACTIVATION("Pending Activation"),
    PENDING_ACCEPTANCE("Pending Acceptance"),
    CANCELLED("Cancelled"),
    SUSPENDED("Suspended");

    public final String value;

    private PostOrderResponseTypeSubscriptionsStatusEnum(String value) {
        this.value = value;
    }
}
