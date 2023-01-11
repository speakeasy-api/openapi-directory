package openapisdk.models.operations;


public enum AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum {
    VOIP("voip"),
    PSTN("pstn"),
    TOLLFREE("tollfree"),
    INTERNATIONAL("international"),
    CONTACT_CENTER("contactCenter");

    public final String value;

    private AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum(String value) {
        this.value = value;
    }
}
