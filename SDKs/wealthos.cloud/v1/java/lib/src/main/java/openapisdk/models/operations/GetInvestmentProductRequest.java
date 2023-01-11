package openapisdk.models.operations;



public class GetInvestmentProductRequest {
    public GetInvestmentProductPathParams pathParams;
    public GetInvestmentProductRequest withPathParams(GetInvestmentProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInvestmentProductHeaders headers;
    public GetInvestmentProductRequest withHeaders(GetInvestmentProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetInvestmentProductSecurity security;
    public GetInvestmentProductRequest withSecurity(GetInvestmentProductSecurity security) {
        this.security = security;
        return this;
    }
}