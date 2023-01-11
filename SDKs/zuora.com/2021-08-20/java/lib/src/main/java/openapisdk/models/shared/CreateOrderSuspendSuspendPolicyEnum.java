package openapisdk.models.shared;


public enum CreateOrderSuspendSuspendPolicyEnum {
    TODAY("Today"),
    END_OF_LAST_INVOICE_PERIOD("EndOfLastInvoicePeriod"),
    FIXED_PERIODS_FROM_TODAY("FixedPeriodsFromToday"),
    SPECIFIC_DATE("SpecificDate");

    public final String value;

    private CreateOrderSuspendSuspendPolicyEnum(String value) {
        this.value = value;
    }
}
