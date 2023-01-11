package openapisdk.models.operations;



public class GetLayer2NetworkRequest {
    public GetLayer2NetworkPathParams pathParams;
    public GetLayer2NetworkRequest withPathParams(GetLayer2NetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLayer2NetworkQueryParams queryParams;
    public GetLayer2NetworkRequest withQueryParams(GetLayer2NetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLayer2NetworkSecurity security;
    public GetLayer2NetworkRequest withSecurity(GetLayer2NetworkSecurity security) {
        this.security = security;
        return this;
    }
}