package openapisdk.models.shared;


public enum PaymentIdentifierTypeEnum {
    REFERENCE_NUMBER("REFERENCE_NUMBER"),
    PLATFORM_CODE("PLATFORM_CODE");

    public final String value;

    private PaymentIdentifierTypeEnum(String value) {
        this.value = value;
    }
}
