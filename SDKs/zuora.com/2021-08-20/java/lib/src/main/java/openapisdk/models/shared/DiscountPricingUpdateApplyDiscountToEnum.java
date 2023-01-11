package openapisdk.models.shared;


public enum DiscountPricingUpdateApplyDiscountToEnum {
    ONETIME("ONETIME"),
    RECURRING("RECURRING"),
    USAGE("USAGE"),
    ONETIMERECURRING("ONETIMERECURRING"),
    ONETIMEUSAGE("ONETIMEUSAGE"),
    RECURRINGUSAGE("RECURRINGUSAGE"),
    ONETIMERECURRINGUSAGE("ONETIMERECURRINGUSAGE");

    public final String value;

    private DiscountPricingUpdateApplyDiscountToEnum(String value) {
        this.value = value;
    }
}
