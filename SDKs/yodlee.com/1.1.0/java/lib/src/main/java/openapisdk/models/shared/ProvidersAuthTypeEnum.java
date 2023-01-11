package openapisdk.models.shared;


public enum ProvidersAuthTypeEnum {
    OAUTH("OAUTH"),
    CREDENTIALS("CREDENTIALS"),
    MFA_CREDENTIALS("MFA_CREDENTIALS");

    public final String value;

    private ProvidersAuthTypeEnum(String value) {
        this.value = value;
    }
}
