package openapisdk.models.shared;


public enum UserStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED"),
    ARCHIVED("ARCHIVED");

    public final String value;

    private UserStatusEnum(String value) {
        this.value = value;
    }
}
