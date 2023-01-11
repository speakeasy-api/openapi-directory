package openapisdk.models.shared;


public enum PostRejectPaymentResponseGatewayStateEnum {
    MARKED_FOR_SUBMISSION("MarkedForSubmission"),
    SUBMITTED("Submitted"),
    SETTLED("Settled"),
    NOT_SUBMITTED("NotSubmitted"),
    FAILED_TO_SETTLE("FailedToSettle");

    public final String value;

    private PostRejectPaymentResponseGatewayStateEnum(String value) {
        this.value = value;
    }
}
