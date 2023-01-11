package openapisdk.models.shared;


public enum VerificationBankTransferCodeTypeEnum {
    BSB("BSB"),
    IFSC("IFSC"),
    ROUTING_NUMBER("ROUTING_NUMBER"),
    SORT_CODE("SORT_CODE");

    public final String value;

    private VerificationBankTransferCodeTypeEnum(String value) {
        this.value = value;
    }
}
