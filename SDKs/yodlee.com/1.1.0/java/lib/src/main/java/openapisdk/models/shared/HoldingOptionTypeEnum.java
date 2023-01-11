package openapisdk.models.shared;


public enum HoldingOptionTypeEnum {
    PUT("put"),
    CALL("call"),
    UNKNOWN("unknown"),
    OTHER("other");

    public final String value;

    private HoldingOptionTypeEnum(String value) {
        this.value = value;
    }
}
