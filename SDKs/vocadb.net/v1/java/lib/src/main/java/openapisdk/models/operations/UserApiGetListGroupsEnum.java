package openapisdk.models.operations;


public enum UserApiGetListGroupsEnum {
    NOTHING("Nothing"),
    LIMITED("Limited"),
    REGULAR("Regular"),
    TRUSTED("Trusted"),
    MODERATOR("Moderator"),
    ADMIN("Admin");

    public final String value;

    private UserApiGetListGroupsEnum(String value) {
        this.value = value;
    }
}
