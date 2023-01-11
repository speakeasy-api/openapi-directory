package openapisdk.models.shared;


public enum OrderLineItemItemTypeEnum {
    PRODUCT("Product"),
    FEE("Fee"),
    SERVICES("Services");

    public final String value;

    private OrderLineItemItemTypeEnum(String value) {
        this.value = value;
    }
}
