package openapisdk.models.shared;


public enum PaymentBankTransferCodeTypeEnum {
    ROUTING_NUMBER("ROUTING_NUMBER"),
    BSB("BSB"),
    IFSC("IFSC"),
    SORT_CODE("SORT_CODE");

    public final String value;

    private PaymentBankTransferCodeTypeEnum(String value) {
        this.value = value;
    }
}
