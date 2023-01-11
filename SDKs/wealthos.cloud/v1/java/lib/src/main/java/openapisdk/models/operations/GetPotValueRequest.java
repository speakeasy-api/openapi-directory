package openapisdk.models.operations;



public class GetPotValueRequest {
    public GetPotValuePathParams pathParams;
    public GetPotValueRequest withPathParams(GetPotValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPotValueHeaders headers;
    public GetPotValueRequest withHeaders(GetPotValueHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPotValueSecurity security;
    public GetPotValueRequest withSecurity(GetPotValueSecurity security) {
        this.security = security;
        return this;
    }
}