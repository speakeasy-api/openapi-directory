package openapisdk.models.operations;



public class UserStatusRequest {
    public UserStatusPathParams pathParams;
    public UserStatusRequest withPathParams(UserStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserStatusRequests request;
    public UserStatusRequest withRequest(UserStatusRequests request) {
        this.request = request;
        return this;
    }
    public UserStatusSecurity security;
    public UserStatusRequest withSecurity(UserStatusSecurity security) {
        this.security = security;
        return this;
    }
}