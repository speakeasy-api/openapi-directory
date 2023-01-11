package openapisdk.models.operations;


public enum AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum {
    USER("user"),
    CALL_QUEUE("callQueue"),
    AUTO_RECEPTIONIST("autoReceptionist"),
    COMMON_AREA_PHONE("commonAreaPhone"),
    SHARED_LINE_GROUP("sharedLineGroup");

    public final String value;

    private AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum(String value) {
        this.value = value;
    }
}
