package openapisdk.models.shared;


public enum ProvidersAuthParameterEnum {
    AUTHORIZATION_CODE("authorizationCode"),
    ID_TOKEN("idToken"),
    AUTH_RESPONSE("authResponse");

    public final String value;

    private ProvidersAuthParameterEnum(String value) {
        this.value = value;
    }
}
