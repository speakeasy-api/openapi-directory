package openapisdk.models.operations;



public class GetRatesRequest {
    public GetRatesPathParams pathParams;
    public GetRatesRequest withPathParams(GetRatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRatesHeaders headers;
    public GetRatesRequest withHeaders(GetRatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetRatesSecurity security;
    public GetRatesRequest withSecurity(GetRatesSecurity security) {
        this.security = security;
        return this;
    }
}