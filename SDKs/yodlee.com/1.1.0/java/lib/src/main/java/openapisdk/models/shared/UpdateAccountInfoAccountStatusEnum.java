package openapisdk.models.shared;


public enum UpdateAccountInfoAccountStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    TO_BE_CLOSED("TO_BE_CLOSED"),
    CLOSED("CLOSED"),
    DELETED("DELETED");

    public final String value;

    private UpdateAccountInfoAccountStatusEnum(String value) {
        this.value = value;
    }
}
