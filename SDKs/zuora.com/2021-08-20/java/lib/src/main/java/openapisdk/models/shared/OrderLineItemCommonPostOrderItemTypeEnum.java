package openapisdk.models.shared;


public enum OrderLineItemCommonPostOrderItemTypeEnum {
    PRODUCT("Product"),
    FEE("Fee"),
    SERVICES("Services");

    public final String value;

    private OrderLineItemCommonPostOrderItemTypeEnum(String value) {
        this.value = value;
    }
}
