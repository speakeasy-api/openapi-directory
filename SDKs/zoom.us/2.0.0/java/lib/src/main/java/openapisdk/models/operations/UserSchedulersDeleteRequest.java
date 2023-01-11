package openapisdk.models.operations;



public class UserSchedulersDeleteRequest {
    public UserSchedulersDeletePathParams pathParams;
    public UserSchedulersDeleteRequest withPathParams(UserSchedulersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserSchedulersDeleteSecurity security;
    public UserSchedulersDeleteRequest withSecurity(UserSchedulersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}