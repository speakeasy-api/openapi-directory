package openapisdk.models.shared;


public enum ProviderAccountStatusEnum {
    LOGIN_IN_PROGRESS("LOGIN_IN_PROGRESS"),
    USER_INPUT_REQUIRED("USER_INPUT_REQUIRED"),
    IN_PROGRESS("IN_PROGRESS"),
    PARTIAL_SUCCESS("PARTIAL_SUCCESS"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED"),
    MIGRATION_IN_PROGRESS("MIGRATION_IN_PROGRESS");

    public final String value;

    private ProviderAccountStatusEnum(String value) {
        this.value = value;
    }
}
