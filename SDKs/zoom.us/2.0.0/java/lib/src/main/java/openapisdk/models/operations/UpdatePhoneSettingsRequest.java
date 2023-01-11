package openapisdk.models.operations;



public class UpdatePhoneSettingsRequest {
    public UpdatePhoneSettingsPathParams pathParams;
    public UpdatePhoneSettingsRequest withPathParams(UpdatePhoneSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePhoneSettingsRequests request;
    public UpdatePhoneSettingsRequest withRequest(UpdatePhoneSettingsRequests request) {
        this.request = request;
        return this;
    }
    public UpdatePhoneSettingsSecurity security;
    public UpdatePhoneSettingsRequest withSecurity(UpdatePhoneSettingsSecurity security) {
        this.security = security;
        return this;
    }
}