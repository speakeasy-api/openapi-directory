package openapisdk.models.operations;



public class GetSuperfundRequest {
    public GetSuperfundPathParams pathParams;
    public GetSuperfundRequest withPathParams(GetSuperfundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSuperfundHeaders headers;
    public GetSuperfundRequest withHeaders(GetSuperfundHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSuperfundSecurity security;
    public GetSuperfundRequest withSecurity(GetSuperfundSecurity security) {
        this.security = security;
        return this;
    }
}