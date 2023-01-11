package openapisdk.models.shared;


public enum CreateOrderOrderActionTypeEnum {
    CREATE_SUBSCRIPTION("CreateSubscription"),
    TERMS_AND_CONDITIONS("TermsAndConditions"),
    ADD_PRODUCT("AddProduct"),
    UPDATE_PRODUCT("UpdateProduct"),
    REMOVE_PRODUCT("RemoveProduct"),
    RENEW_SUBSCRIPTION("RenewSubscription"),
    CANCEL_SUBSCRIPTION("CancelSubscription"),
    OWNER_TRANSFER("OwnerTransfer"),
    SUSPEND("Suspend"),
    RESUME("Resume");

    public final String value;

    private CreateOrderOrderActionTypeEnum(String value) {
        this.value = value;
    }
}
