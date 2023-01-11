package openapisdk.models.operations;



public class GetTotalPotHoldingsRequest {
    public GetTotalPotHoldingsPathParams pathParams;
    public GetTotalPotHoldingsRequest withPathParams(GetTotalPotHoldingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTotalPotHoldingsHeaders headers;
    public GetTotalPotHoldingsRequest withHeaders(GetTotalPotHoldingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTotalPotHoldingsSecurity security;
    public GetTotalPotHoldingsRequest withSecurity(GetTotalPotHoldingsSecurity security) {
        this.security = security;
        return this;
    }
}