package openapisdk.models.operations;


public enum UsersStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    PENDING("pending");

    public final String value;

    private UsersStatusEnum(String value) {
        this.value = value;
    }
}
