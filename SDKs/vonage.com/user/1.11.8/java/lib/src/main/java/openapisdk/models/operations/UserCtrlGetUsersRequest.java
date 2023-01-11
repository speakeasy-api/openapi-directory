package openapisdk.models.operations;



public class UserCtrlGetUsersRequest {
    public UserCtrlGetUsersPathParams pathParams;
    public UserCtrlGetUsersRequest withPathParams(UserCtrlGetUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserCtrlGetUsersQueryParams queryParams;
    public UserCtrlGetUsersRequest withQueryParams(UserCtrlGetUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserCtrlGetUsersSecurity security;
    public UserCtrlGetUsersRequest withSecurity(UserCtrlGetUsersSecurity security) {
        this.security = security;
        return this;
    }
}