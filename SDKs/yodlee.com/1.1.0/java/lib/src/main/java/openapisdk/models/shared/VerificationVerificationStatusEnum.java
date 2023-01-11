package openapisdk.models.shared;


public enum VerificationVerificationStatusEnum {
    INITIATED("INITIATED"),
    DEPOSITED("DEPOSITED"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private VerificationVerificationStatusEnum(String value) {
        this.value = value;
    }
}
