package openapisdk.models.shared;


public enum PostOrderLineItemUpdateTypeItemStateEnum {
    EXECUTING("Executing"),
    SENT_TO_BILLING("SentToBilling"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private PostOrderLineItemUpdateTypeItemStateEnum(String value) {
        this.value = value;
    }
}
