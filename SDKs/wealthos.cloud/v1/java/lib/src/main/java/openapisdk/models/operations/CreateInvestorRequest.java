package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvestorRequest {
    public CreateInvestorHeaders headers;
    public CreateInvestorRequest withHeaders(CreateInvestorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateInvestorRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateInvestorSecurity security;
    public CreateInvestorRequest withSecurity(CreateInvestorSecurity security) {
        this.security = security;
        return this;
    }
}