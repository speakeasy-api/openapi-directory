package openapisdk.models.shared;


public enum OnDemandPageVideoUserAccountEnum {
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

    private OnDemandPageVideoUserAccountEnum(String value) {
        this.value = value;
    }
}
