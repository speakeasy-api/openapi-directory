package openapisdk.models.shared;


public enum BankTransferCodeTypeEnum {
    BSB("BSB"),
    IFSC("IFSC"),
    ROUTING_NUMBER("ROUTING_NUMBER"),
    SORT_CODE("SORT_CODE");

    public final String value;

    private BankTransferCodeTypeEnum(String value) {
        this.value = value;
    }
}
