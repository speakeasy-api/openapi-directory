package openapisdk.models.shared;


public enum UserForApiContractGroupIdEnum {
    NOTHING("Nothing"),
    LIMITED("Limited"),
    REGULAR("Regular"),
    TRUSTED("Trusted"),
    MODERATOR("Moderator"),
    ADMIN("Admin");

    public final String value;

    private UserForApiContractGroupIdEnum(String value) {
        this.value = value;
    }
}
