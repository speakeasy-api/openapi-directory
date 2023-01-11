package openapisdk.models.operations;


public enum UserCreateApplicationJsonActionEnum {
    CREATE("create"),
    AUTO_CREATE("autoCreate"),
    CUST_CREATE("custCreate"),
    SSO_CREATE("ssoCreate");

    public final String value;

    private UserCreateApplicationJsonActionEnum(String value) {
        this.value = value;
    }
}
