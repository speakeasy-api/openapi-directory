package openapisdk.models.shared;


public enum UsageVolumePricingOverrideRatingGroupEnum {
    BY_BILLING_PERIOD("ByBillingPeriod"),
    BY_USAGE_START_DATE("ByUsageStartDate"),
    BY_USAGE_RECORD("ByUsageRecord"),
    BY_USAGE_UPLOAD("ByUsageUpload");

    public final String value;

    private UsageVolumePricingOverrideRatingGroupEnum(String value) {
        this.value = value;
    }
}
