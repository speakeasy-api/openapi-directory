package openapisdk.models.operations;



public class UserCtrlGetUserByIdRequest {
    public UserCtrlGetUserByIdPathParams pathParams;
    public UserCtrlGetUserByIdRequest withPathParams(UserCtrlGetUserByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserCtrlGetUserByIdSecurity security;
    public UserCtrlGetUserByIdRequest withSecurity(UserCtrlGetUserByIdSecurity security) {
        this.security = security;
        return this;
    }
}