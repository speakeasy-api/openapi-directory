package openapisdk.models.operations;


public enum UserCreateMultipartFormDataActionEnum {
    CREATE("create"),
    AUTO_CREATE("autoCreate"),
    CUST_CREATE("custCreate"),
    SSO_CREATE("ssoCreate");

    public final String value;

    private UserCreateMultipartFormDataActionEnum(String value) {
        this.value = value;
    }
}
