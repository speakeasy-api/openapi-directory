package openapisdk.models.shared;


public enum GroupMembershipClaimsEnum {
    NONE("None"),
    SECURITY_GROUP("SecurityGroup"),
    ALL("All");

    public final String value;

    private GroupMembershipClaimsEnum(String value) {
        this.value = value;
    }
}
