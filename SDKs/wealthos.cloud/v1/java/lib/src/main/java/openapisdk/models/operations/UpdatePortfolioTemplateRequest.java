package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioTemplateRequest {
    public UpdatePortfolioTemplatePathParams pathParams;
    public UpdatePortfolioTemplateRequest withPathParams(UpdatePortfolioTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePortfolioTemplateHeaders headers;
    public UpdatePortfolioTemplateRequest withHeaders(UpdatePortfolioTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdatePortfolioTemplateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdatePortfolioTemplateSecurity security;
    public UpdatePortfolioTemplateRequest withSecurity(UpdatePortfolioTemplateSecurity security) {
        this.security = security;
        return this;
    }
}