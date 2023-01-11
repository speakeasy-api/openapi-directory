package openapisdk.models.shared;


public enum JobResultSubscriptionsStatusEnum {
    ACTIVE("Active"),
    PENDING_ACTIVATION("Pending Activation"),
    PENDING_ACCEPTANCE("Pending Acceptance"),
    CANCELLED("Cancelled");

    public final String value;

    private JobResultSubscriptionsStatusEnum(String value) {
        this.value = value;
    }
}
