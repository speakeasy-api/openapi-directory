package openapisdk.models.shared;


public enum AutoRefreshAdditionalStatusEnum {
    SCHEDULED("SCHEDULED"),
    TEMP_ERROR("TEMP_ERROR"),
    SITE_BLOCKING("SITE_BLOCKING"),
    SITE_NOT_SUPPORTED("SITE_NOT_SUPPORTED"),
    REAL_TIME_MFA_REQUIRED("REAL_TIME_MFA_REQUIRED"),
    USER_ACTION_REQUIRED("USER_ACTION_REQUIRED"),
    UNSUBSCRIBED("UNSUBSCRIBED"),
    MANUAL_ACCOUNT("MANUAL_ACCOUNT");

    public final String value;

    private AutoRefreshAdditionalStatusEnum(String value) {
        this.value = value;
    }
}
