package openapisdk.models.shared;


public enum AccountStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED"),
    ARCHIVED("ARCHIVED");

    public final String value;

    private AccountStatusEnum(String value) {
        this.value = value;
    }
}
