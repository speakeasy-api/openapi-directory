package openapisdk.models.operations;


public enum ReportOperationLogsCategoryTypeEnum {
    ALL("all"),
    USER("user"),
    USER_SETTINGS("user_settings"),
    ACCOUNT("account"),
    BILLING("billing"),
    IM("im"),
    RECORDING("recording"),
    PHONE_CONTACTS("phone_contacts"),
    WEBINAR("webinar"),
    SUB_ACCOUNT("sub_account"),
    ROLE("role"),
    ZOOM_ROOMS("zoom_rooms");

    public final String value;

    private ReportOperationLogsCategoryTypeEnum(String value) {
        this.value = value;
    }
}
