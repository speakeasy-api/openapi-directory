package openapisdk.models.shared;


public enum AuthTokenTypeEnum {
    BEARER("bearer");

    public final String value;

    private AuthTokenTypeEnum(String value) {
        this.value = value;
    }
}
