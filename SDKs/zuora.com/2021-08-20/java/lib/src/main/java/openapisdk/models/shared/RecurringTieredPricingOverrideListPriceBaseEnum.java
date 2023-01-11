package openapisdk.models.shared;


public enum RecurringTieredPricingOverrideListPriceBaseEnum {
    PER_BILLING_PERIOD("Per_Billing_Period"),
    PER_MONTH("Per_Month"),
    PER_WEEK("Per_Week");

    public final String value;

    private RecurringTieredPricingOverrideListPriceBaseEnum(String value) {
        this.value = value;
    }
}
