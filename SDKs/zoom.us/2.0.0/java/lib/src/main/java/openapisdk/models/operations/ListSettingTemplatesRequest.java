package openapisdk.models.operations;



public class ListSettingTemplatesRequest {
    public ListSettingTemplatesQueryParams queryParams;
    public ListSettingTemplatesRequest withQueryParams(ListSettingTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSettingTemplatesSecurity security;
    public ListSettingTemplatesRequest withSecurity(ListSettingTemplatesSecurity security) {
        this.security = security;
        return this;
    }
}