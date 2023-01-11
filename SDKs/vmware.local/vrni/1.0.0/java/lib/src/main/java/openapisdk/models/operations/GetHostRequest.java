package openapisdk.models.operations;



public class GetHostRequest {
    public GetHostPathParams pathParams;
    public GetHostRequest withPathParams(GetHostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetHostQueryParams queryParams;
    public GetHostRequest withQueryParams(GetHostQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetHostSecurity security;
    public GetHostRequest withSecurity(GetHostSecurity security) {
        this.security = security;
        return this;
    }
}