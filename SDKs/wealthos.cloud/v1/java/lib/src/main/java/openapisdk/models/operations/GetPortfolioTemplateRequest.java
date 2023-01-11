package openapisdk.models.operations;



public class GetPortfolioTemplateRequest {
    public GetPortfolioTemplatePathParams pathParams;
    public GetPortfolioTemplateRequest withPathParams(GetPortfolioTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPortfolioTemplateHeaders headers;
    public GetPortfolioTemplateRequest withHeaders(GetPortfolioTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPortfolioTemplateSecurity security;
    public GetPortfolioTemplateRequest withSecurity(GetPortfolioTemplateSecurity security) {
        this.security = security;
        return this;
    }
}