package openapisdk.models.shared;


public enum DataExtractsAccountAccountStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    TO_BE_CLOSED("TO_BE_CLOSED"),
    CLOSED("CLOSED"),
    DELETED("DELETED");

    public final String value;

    private DataExtractsAccountAccountStatusEnum(String value) {
        this.value = value;
    }
}
