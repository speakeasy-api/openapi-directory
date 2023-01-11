package openapisdk.models.shared;


public enum SubscribeRequestPreviewOptionsPreviewTypeEnum {
    INVOICE_ITEM("InvoiceItem"),
    CHARGE_METRICS("ChargeMetrics"),
    INVOICE_ITEM_CHARGE_METRICS("InvoiceItemChargeMetrics");

    public final String value;

    private SubscribeRequestPreviewOptionsPreviewTypeEnum(String value) {
        this.value = value;
    }
}
