package openapisdk.models.shared;


public enum OrderLineItemRetrieveOrderItemTypeEnum {
    PRODUCT("Product"),
    FEE("Fee"),
    SERVICES("Services");

    public final String value;

    private OrderLineItemRetrieveOrderItemTypeEnum(String value) {
        this.value = value;
    }
}
