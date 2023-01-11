package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInvestorRequest {
    public UpdateInvestorPathParams pathParams;
    public UpdateInvestorRequest withPathParams(UpdateInvestorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateInvestorHeaders headers;
    public UpdateInvestorRequest withHeaders(UpdateInvestorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateInvestorRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateInvestorSecurity security;
    public UpdateInvestorRequest withSecurity(UpdateInvestorSecurity security) {
        this.security = security;
        return this;
    }
}