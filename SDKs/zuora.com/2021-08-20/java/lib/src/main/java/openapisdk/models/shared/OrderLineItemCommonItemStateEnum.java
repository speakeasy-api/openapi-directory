package openapisdk.models.shared;


public enum OrderLineItemCommonItemStateEnum {
    EXECUTING("Executing"),
    SENT_TO_BILLING("SentToBilling"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private OrderLineItemCommonItemStateEnum(String value) {
        this.value = value;
    }
}
