package openapisdk.models.operations;


public enum ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum {
    TOLL_FREE("toll-free"),
    CALL_OUT("call-out"),
    CALL_IN("call-in"),
    US_TOLL_NUMBER("US toll-number"),
    GLOBAL_TOLL_NUMBER("global toll-number"),
    PREMIUM("premium"),
    PREMIUM_CALL_IN("premium call-in");

    public final String value;

    private ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum(String value) {
        this.value = value;
    }
}
