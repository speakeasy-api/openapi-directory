package openapisdk.models.shared;


public enum PostReconcileRefundResponseGatewayStateEnum {
    SETTLED("Settled"),
    FAILED_TO_SETTLE("FailedToSettle");

    public final String value;

    private PostReconcileRefundResponseGatewayStateEnum(String value) {
        this.value = value;
    }
}
