package openapisdk.models.shared;


public enum DerivedHoldingOptionTypeEnum {
    PUT("put"),
    CALL("call"),
    UNKNOWN("unknown"),
    OTHER("other");

    public final String value;

    private DerivedHoldingOptionTypeEnum(String value) {
        this.value = value;
    }
}
