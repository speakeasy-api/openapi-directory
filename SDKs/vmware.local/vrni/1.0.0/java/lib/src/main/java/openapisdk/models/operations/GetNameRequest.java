package openapisdk.models.operations;



public class GetNameRequest {
    public GetNamePathParams pathParams;
    public GetNameRequest withPathParams(GetNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNameQueryParams queryParams;
    public GetNameRequest withQueryParams(GetNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNameSecurity security;
    public GetNameRequest withSecurity(GetNameSecurity security) {
        this.security = security;
        return this;
    }
}