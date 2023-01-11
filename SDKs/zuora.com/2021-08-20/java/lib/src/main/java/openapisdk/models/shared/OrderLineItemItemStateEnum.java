package openapisdk.models.shared;


public enum OrderLineItemItemStateEnum {
    EXECUTING("Executing"),
    SENT_TO_BILLING("SentToBilling"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private OrderLineItemItemStateEnum(String value) {
        this.value = value;
    }
}
