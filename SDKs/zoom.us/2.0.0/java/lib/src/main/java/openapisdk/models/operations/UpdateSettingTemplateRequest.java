package openapisdk.models.operations;



public class UpdateSettingTemplateRequest {
    public UpdateSettingTemplatePathParams pathParams;
    public UpdateSettingTemplateRequest withPathParams(UpdateSettingTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSettingTemplateRequests request;
    public UpdateSettingTemplateRequest withRequest(UpdateSettingTemplateRequests request) {
        this.request = request;
        return this;
    }
    public UpdateSettingTemplateSecurity security;
    public UpdateSettingTemplateRequest withSecurity(UpdateSettingTemplateSecurity security) {
        this.security = security;
        return this;
    }
}