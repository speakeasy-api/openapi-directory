package openapisdk.models.operations;



public class GetSecurityTagRequest {
    public GetSecurityTagPathParams pathParams;
    public GetSecurityTagRequest withPathParams(GetSecurityTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSecurityTagQueryParams queryParams;
    public GetSecurityTagRequest withQueryParams(GetSecurityTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSecurityTagSecurity security;
    public GetSecurityTagRequest withSecurity(GetSecurityTagSecurity security) {
        this.security = security;
        return this;
    }
}