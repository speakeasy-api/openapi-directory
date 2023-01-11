package openapisdk.models.shared;


public enum OrderLineItemRetrieveOrderItemStateEnum {
    EXECUTING("Executing"),
    SENT_TO_BILLING("SentToBilling"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private OrderLineItemRetrieveOrderItemStateEnum(String value) {
        this.value = value;
    }
}
