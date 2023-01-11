package openapisdk.models.operations;



public class AddUserSettingRequest {
    public AddUserSettingPathParams pathParams;
    public AddUserSettingRequest withPathParams(AddUserSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddUserSettingRequests request;
    public AddUserSettingRequest withRequest(AddUserSettingRequests request) {
        this.request = request;
        return this;
    }
    public AddUserSettingSecurity security;
    public AddUserSettingRequest withSecurity(AddUserSettingSecurity security) {
        this.security = security;
        return this;
    }
}