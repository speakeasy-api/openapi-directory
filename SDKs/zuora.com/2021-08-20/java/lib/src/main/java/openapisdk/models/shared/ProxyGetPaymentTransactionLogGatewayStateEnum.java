package openapisdk.models.shared;


public enum ProxyGetPaymentTransactionLogGatewayStateEnum {
    MARKED_FOR_SUBMISSION("MarkedForSubmission"),
    SUBMITTED("Submitted"),
    SETTLED("Settled"),
    NOT_SUBMITTED("NotSubmitted"),
    FAILED_TO_SETTLE("FailedToSettle");

    public final String value;

    private ProxyGetPaymentTransactionLogGatewayStateEnum(String value) {
        this.value = value;
    }
}
