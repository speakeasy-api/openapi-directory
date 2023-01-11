package openapisdk.models.operations;



public class AuthenticateRequest {
    public AuthenticatePathParams pathParams;
    public AuthenticateRequest withPathParams(AuthenticatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthenticateQueryParams queryParams;
    public AuthenticateRequest withQueryParams(AuthenticateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}