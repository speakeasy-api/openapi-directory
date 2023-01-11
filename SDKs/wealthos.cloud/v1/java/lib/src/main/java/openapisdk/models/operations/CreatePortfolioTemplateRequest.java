package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePortfolioTemplateRequest {
    public CreatePortfolioTemplateHeaders headers;
    public CreatePortfolioTemplateRequest withHeaders(CreatePortfolioTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreatePortfolioTemplateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreatePortfolioTemplateSecurity security;
    public CreatePortfolioTemplateRequest withSecurity(CreatePortfolioTemplateSecurity security) {
        this.security = security;
        return this;
    }
}