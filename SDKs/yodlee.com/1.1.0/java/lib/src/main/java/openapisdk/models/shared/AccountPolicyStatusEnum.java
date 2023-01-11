package openapisdk.models.shared;


public enum AccountPolicyStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    OTHER("OTHER");

    public final String value;

    private AccountPolicyStatusEnum(String value) {
        this.value = value;
    }
}
