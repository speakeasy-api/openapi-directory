package openapisdk.models.operations;



public class UpdateUserSettingRequest {
    public UpdateUserSettingPathParams pathParams;
    public UpdateUserSettingRequest withPathParams(UpdateUserSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateUserSettingRequests request;
    public UpdateUserSettingRequest withRequest(UpdateUserSettingRequests request) {
        this.request = request;
        return this;
    }
    public UpdateUserSettingSecurity security;
    public UpdateUserSettingRequest withSecurity(UpdateUserSettingSecurity security) {
        this.security = security;
        return this;
    }
}