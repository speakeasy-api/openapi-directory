package openapisdk.models.shared;


public enum OrderLineItemCommonTaxModeEnum {
    TAX_INCLUSIVE("TaxInclusive"),
    TAX_EXCLUSIVE("TaxExclusive");

    public final String value;

    private OrderLineItemCommonTaxModeEnum(String value) {
        this.value = value;
    }
}
