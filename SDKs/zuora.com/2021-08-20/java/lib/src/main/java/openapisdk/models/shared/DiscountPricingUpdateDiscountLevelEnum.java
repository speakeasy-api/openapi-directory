package openapisdk.models.shared;


public enum DiscountPricingUpdateDiscountLevelEnum {
    RATEPLAN("rateplan"),
    SUBSCRIPTION("subscription"),
    ACCOUNT("account");

    public final String value;

    private DiscountPricingUpdateDiscountLevelEnum(String value) {
        this.value = value;
    }
}
