package openapisdk.models.shared;


public enum PreviewOptionsPreviewTypesEnum {
    CHARGE_METRICS("ChargeMetrics"),
    BILLING_DOCS("BillingDocs"),
    ORDER_DELTA_METRICS("OrderDeltaMetrics"),
    ORDER_METRICS("OrderMetrics"),
    RAMP_METRICS("RampMetrics"),
    RAMP_DELTA_METRICS("RampDeltaMetrics");

    public final String value;

    private PreviewOptionsPreviewTypesEnum(String value) {
        this.value = value;
    }
}
