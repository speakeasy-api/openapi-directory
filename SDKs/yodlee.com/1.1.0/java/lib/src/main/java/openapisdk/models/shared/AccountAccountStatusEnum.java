package openapisdk.models.shared;


public enum AccountAccountStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    TO_BE_CLOSED("TO_BE_CLOSED"),
    CLOSED("CLOSED"),
    DELETED("DELETED");

    public final String value;

    private AccountAccountStatusEnum(String value) {
        this.value = value;
    }
}
