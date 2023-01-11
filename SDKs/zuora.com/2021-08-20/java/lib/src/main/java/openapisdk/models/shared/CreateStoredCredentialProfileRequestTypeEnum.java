package openapisdk.models.shared;


public enum CreateStoredCredentialProfileRequestTypeEnum {
    RECURRING("Recurring"),
    UNSCHEDULED("Unscheduled");

    public final String value;

    private CreateStoredCredentialProfileRequestTypeEnum(String value) {
        this.value = value;
    }
}
