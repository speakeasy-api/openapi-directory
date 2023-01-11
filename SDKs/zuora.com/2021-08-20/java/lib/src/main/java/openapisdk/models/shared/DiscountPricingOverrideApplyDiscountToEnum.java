package openapisdk.models.shared;


public enum DiscountPricingOverrideApplyDiscountToEnum {
    ONETIME("ONETIME"),
    RECURRING("RECURRING"),
    USAGE("USAGE"),
    ONETIMERECURRING("ONETIMERECURRING"),
    ONETIMEUSAGE("ONETIMEUSAGE"),
    RECURRINGUSAGE("RECURRINGUSAGE"),
    ONETIMERECURRINGUSAGE("ONETIMERECURRINGUSAGE");

    public final String value;

    private DiscountPricingOverrideApplyDiscountToEnum(String value) {
        this.value = value;
    }
}
