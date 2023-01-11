package openapisdk.models.shared;


public enum VerificationStatusVerificationStatusEnum {
    INITIATED("INITIATED"),
    DEPOSITED("DEPOSITED"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private VerificationStatusVerificationStatusEnum(String value) {
        this.value = value;
    }
}
