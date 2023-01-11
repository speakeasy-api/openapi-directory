package openapisdk.models.shared;


public enum TaxInfoExemptStatusEnum {
    NO("No"),
    YES("Yes"),
    PENDING_VERIFICATION("PendingVerification");

    public final String value;

    private TaxInfoExemptStatusEnum(String value) {
        this.value = value;
    }
}
