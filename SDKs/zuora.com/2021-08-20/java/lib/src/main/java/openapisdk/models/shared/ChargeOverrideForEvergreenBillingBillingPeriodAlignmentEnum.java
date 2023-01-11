package openapisdk.models.shared;


public enum ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum {
    ALIGN_TO_CHARGE("AlignToCharge"),
    ALIGN_TO_SUBSCRIPTION_START("AlignToSubscriptionStart"),
    ALIGN_TO_TERM_START("AlignToTermStart");

    public final String value;

    private ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum(String value) {
        this.value = value;
    }
}
