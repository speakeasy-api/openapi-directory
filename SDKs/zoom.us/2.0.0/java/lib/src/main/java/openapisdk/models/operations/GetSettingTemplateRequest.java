package openapisdk.models.operations;



public class GetSettingTemplateRequest {
    public GetSettingTemplatePathParams pathParams;
    public GetSettingTemplateRequest withPathParams(GetSettingTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSettingTemplateQueryParams queryParams;
    public GetSettingTemplateRequest withQueryParams(GetSettingTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSettingTemplateSecurity security;
    public GetSettingTemplateRequest withSecurity(GetSettingTemplateSecurity security) {
        this.security = security;
        return this;
    }
}