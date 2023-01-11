package openapisdk.models.operations;



public class UnfollowUserRequest {
    public UnfollowUserPathParams pathParams;
    public UnfollowUserRequest withPathParams(UnfollowUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnfollowUserSecurity security;
    public UnfollowUserRequest withSecurity(UnfollowUserSecurity security) {
        this.security = security;
        return this;
    }
}