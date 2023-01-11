package openapisdk.models.shared;


public enum OrderLineItemCommonPostOrderItemStateEnum {
    EXECUTING("Executing"),
    SENT_TO_BILLING("SentToBilling"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private OrderLineItemCommonPostOrderItemStateEnum(String value) {
        this.value = value;
    }
}
