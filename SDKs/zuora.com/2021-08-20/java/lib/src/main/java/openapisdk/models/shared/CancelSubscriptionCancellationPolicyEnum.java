package openapisdk.models.shared;


public enum CancelSubscriptionCancellationPolicyEnum {
    END_OF_CURRENT_TERM("EndOfCurrentTerm"),
    END_OF_LAST_INVOICE_PERIOD("EndOfLastInvoicePeriod"),
    SPECIFIC_DATE("SpecificDate");

    public final String value;

    private CancelSubscriptionCancellationPolicyEnum(String value) {
        this.value = value;
    }
}
