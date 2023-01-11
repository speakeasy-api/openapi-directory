package openapisdk.models.shared;


public enum DataExtractsHoldingOptionTypeEnum {
    PUT("put"),
    CALL("call"),
    UNKNOWN("unknown"),
    OTHER("other");

    public final String value;

    private DataExtractsHoldingOptionTypeEnum(String value) {
        this.value = value;
    }
}
