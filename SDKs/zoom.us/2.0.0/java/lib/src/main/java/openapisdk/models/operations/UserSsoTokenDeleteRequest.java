package openapisdk.models.operations;



public class UserSsoTokenDeleteRequest {
    public UserSsoTokenDeletePathParams pathParams;
    public UserSsoTokenDeleteRequest withPathParams(UserSsoTokenDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserSsoTokenDeleteSecurity security;
    public UserSsoTokenDeleteRequest withSecurity(UserSsoTokenDeleteSecurity security) {
        this.security = security;
        return this;
    }
}