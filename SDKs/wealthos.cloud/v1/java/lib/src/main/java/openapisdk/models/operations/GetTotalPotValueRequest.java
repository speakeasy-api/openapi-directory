package openapisdk.models.operations;



public class GetTotalPotValueRequest {
    public GetTotalPotValuePathParams pathParams;
    public GetTotalPotValueRequest withPathParams(GetTotalPotValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTotalPotValueHeaders headers;
    public GetTotalPotValueRequest withHeaders(GetTotalPotValueHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTotalPotValueSecurity security;
    public GetTotalPotValueRequest withSecurity(GetTotalPotValueSecurity security) {
        this.security = security;
        return this;
    }
}