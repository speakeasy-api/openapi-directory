package openapisdk.models.operations;



public class GetConfiguredInvestmentProductPricesRequest {
    public GetConfiguredInvestmentProductPricesQueryParams queryParams;
    public GetConfiguredInvestmentProductPricesRequest withQueryParams(GetConfiguredInvestmentProductPricesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConfiguredInvestmentProductPricesHeaders headers;
    public GetConfiguredInvestmentProductPricesRequest withHeaders(GetConfiguredInvestmentProductPricesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetConfiguredInvestmentProductPricesSecurity security;
    public GetConfiguredInvestmentProductPricesRequest withSecurity(GetConfiguredInvestmentProductPricesSecurity security) {
        this.security = security;
        return this;
    }
}