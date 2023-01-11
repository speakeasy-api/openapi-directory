package openapisdk.models.shared;


public enum PutPublicEmailTemplateRequestFromEmailTypeEnum {
    TENANT_EMAIL("TenantEmail"),
    SPECIFIC_EMAIL("SpecificEmail");

    public final String value;

    private PutPublicEmailTemplateRequestFromEmailTypeEnum(String value) {
        this.value = value;
    }
}
