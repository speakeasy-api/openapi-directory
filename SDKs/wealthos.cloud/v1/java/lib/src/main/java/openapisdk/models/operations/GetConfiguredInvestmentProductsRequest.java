package openapisdk.models.operations;



public class GetConfiguredInvestmentProductsRequest {
    public GetConfiguredInvestmentProductsQueryParams queryParams;
    public GetConfiguredInvestmentProductsRequest withQueryParams(GetConfiguredInvestmentProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConfiguredInvestmentProductsHeaders headers;
    public GetConfiguredInvestmentProductsRequest withHeaders(GetConfiguredInvestmentProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetConfiguredInvestmentProductsSecurity security;
    public GetConfiguredInvestmentProductsRequest withSecurity(GetConfiguredInvestmentProductsSecurity security) {
        this.security = security;
        return this;
    }
}