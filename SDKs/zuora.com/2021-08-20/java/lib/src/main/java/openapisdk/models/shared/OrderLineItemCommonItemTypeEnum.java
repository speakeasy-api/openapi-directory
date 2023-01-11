package openapisdk.models.shared;


public enum OrderLineItemCommonItemTypeEnum {
    PRODUCT("Product"),
    FEE("Fee"),
    SERVICES("Services");

    public final String value;

    private OrderLineItemCommonItemTypeEnum(String value) {
        this.value = value;
    }
}
