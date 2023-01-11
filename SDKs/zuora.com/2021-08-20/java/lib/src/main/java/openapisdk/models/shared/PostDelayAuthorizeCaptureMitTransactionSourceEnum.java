package openapisdk.models.shared;


public enum PostDelayAuthorizeCaptureMitTransactionSourceEnum {
    C_UNSCHEDULED("C_Unscheduled"),
    M_RECURRING("M_Recurring"),
    M_UNSCHEDULED("M_Unscheduled");

    public final String value;

    private PostDelayAuthorizeCaptureMitTransactionSourceEnum(String value) {
        this.value = value;
    }
}
