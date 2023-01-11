package openapisdk.models.operations;



public class UserTokenRequest {
    public UserTokenPathParams pathParams;
    public UserTokenRequest withPathParams(UserTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserTokenQueryParams queryParams;
    public UserTokenRequest withQueryParams(UserTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserTokenSecurity security;
    public UserTokenRequest withSecurity(UserTokenSecurity security) {
        this.security = security;
        return this;
    }
}