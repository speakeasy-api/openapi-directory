package openapisdk.models.shared;


public enum OrderLineItemTaxModeEnum {
    TAX_INCLUSIVE("TaxInclusive"),
    TAX_EXCLUSIVE("TaxExclusive");

    public final String value;

    private OrderLineItemTaxModeEnum(String value) {
        this.value = value;
    }
}
