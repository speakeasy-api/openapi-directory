package openapisdk.models.shared;


public enum ProviderDetailAuthParameterEnum {
    AUTHORIZATION_CODE("authorizationCode"),
    ID_TOKEN("idToken"),
    AUTH_RESPONSE("authResponse");

    public final String value;

    private ProviderDetailAuthParameterEnum(String value) {
        this.value = value;
    }
}
