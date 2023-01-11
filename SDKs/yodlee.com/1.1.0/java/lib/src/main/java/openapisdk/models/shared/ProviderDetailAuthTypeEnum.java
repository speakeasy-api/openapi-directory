package openapisdk.models.shared;


public enum ProviderDetailAuthTypeEnum {
    OAUTH("OAUTH"),
    CREDENTIALS("CREDENTIALS"),
    MFA_CREDENTIALS("MFA_CREDENTIALS");

    public final String value;

    private ProviderDetailAuthTypeEnum(String value) {
        this.value = value;
    }
}
