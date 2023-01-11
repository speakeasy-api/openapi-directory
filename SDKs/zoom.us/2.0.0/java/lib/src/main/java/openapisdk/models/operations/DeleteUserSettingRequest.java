package openapisdk.models.operations;



public class DeleteUserSettingRequest {
    public DeleteUserSettingPathParams pathParams;
    public DeleteUserSettingRequest withPathParams(DeleteUserSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserSettingQueryParams queryParams;
    public DeleteUserSettingRequest withQueryParams(DeleteUserSettingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteUserSettingSecurity security;
    public DeleteUserSettingRequest withSecurity(DeleteUserSettingSecurity security) {
        this.security = security;
        return this;
    }
}