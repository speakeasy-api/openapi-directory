package openapisdk.models.operations;



public class GetAllPortfolioTemplatesRequest {
    public GetAllPortfolioTemplatesHeaders headers;
    public GetAllPortfolioTemplatesRequest withHeaders(GetAllPortfolioTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllPortfolioTemplatesSecurity security;
    public GetAllPortfolioTemplatesRequest withSecurity(GetAllPortfolioTemplatesSecurity security) {
        this.security = security;
        return this;
    }
}