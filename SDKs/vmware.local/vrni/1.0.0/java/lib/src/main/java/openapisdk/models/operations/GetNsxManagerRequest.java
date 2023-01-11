package openapisdk.models.operations;



public class GetNsxManagerRequest {
    public GetNsxManagerPathParams pathParams;
    public GetNsxManagerRequest withPathParams(GetNsxManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNsxManagerQueryParams queryParams;
    public GetNsxManagerRequest withQueryParams(GetNsxManagerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNsxManagerSecurity security;
    public GetNsxManagerRequest withSecurity(GetNsxManagerSecurity security) {
        this.security = security;
        return this;
    }
}