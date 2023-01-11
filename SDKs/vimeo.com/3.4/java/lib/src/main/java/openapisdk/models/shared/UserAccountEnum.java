package openapisdk.models.shared;


public enum UserAccountEnum {
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

    private UserAccountEnum(String value) {
        this.value = value;
    }
}
