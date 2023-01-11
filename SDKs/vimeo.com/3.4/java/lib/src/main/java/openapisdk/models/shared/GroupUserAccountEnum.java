package openapisdk.models.shared;


public enum GroupUserAccountEnum {
    BASIC("basic"),
    BUSINESS("business"),
    LIVE_BUSINESS("live_business"),
    LIVE_PREMIUM("live_premium"),
    LIVE_PRO("live_pro"),
    PLUS("plus"),
    PRO("pro"),
    PRO_UNLIMITED("pro_unlimited"),
    PRODUCER("producer");

    public final String value;

    private GroupUserAccountEnum(String value) {
        this.value = value;
    }
}
