package openapisdk.models.shared;


public enum PostReconcileRefundRequestActionEnum {
    SETTLE("settle"),
    REJECT("reject");

    public final String value;

    private PostReconcileRefundRequestActionEnum(String value) {
        this.value = value;
    }
}
