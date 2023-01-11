package openapisdk.models.shared;


public enum InvoiceItemPreviewResultProcessingTypeEnum {
    CHARGE("Charge"),
    DISCOUNT("Discount"),
    TAX("Tax");

    public final String value;

    private InvoiceItemPreviewResultProcessingTypeEnum(String value) {
        this.value = value;
    }
}
