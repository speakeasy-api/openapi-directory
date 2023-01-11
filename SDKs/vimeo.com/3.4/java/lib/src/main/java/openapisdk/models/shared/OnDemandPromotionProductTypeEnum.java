package openapisdk.models.shared;


public enum OnDemandPromotionProductTypeEnum {
    ANY("any"),
    BUY("buy"),
    BUY_EPISODE("buy_episode"),
    RENT("rent"),
    RENT_EPISODE("rent_episode"),
    SUBSCRIBE("subscribe");

    public final String value;

    private OnDemandPromotionProductTypeEnum(String value) {
        this.value = value;
    }
}
