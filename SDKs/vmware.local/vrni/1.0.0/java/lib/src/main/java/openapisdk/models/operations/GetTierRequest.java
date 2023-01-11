package openapisdk.models.operations;



public class GetTierRequest {
    public GetTierPathParams pathParams;
    public GetTierRequest withPathParams(GetTierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTierHeaders headers;
    public GetTierRequest withHeaders(GetTierHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTierSecurity security;
    public GetTierRequest withSecurity(GetTierSecurity security) {
        this.security = security;
        return this;
    }
}