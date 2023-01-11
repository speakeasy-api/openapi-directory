package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSuperfundRequest {
    public UpdateSuperfundPathParams pathParams;
    public UpdateSuperfundRequest withPathParams(UpdateSuperfundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSuperfundHeaders headers;
    public UpdateSuperfundRequest withHeaders(UpdateSuperfundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuperFundInput[] request;
    public UpdateSuperfundRequest withRequest(openapisdk.models.shared.SuperFundInput[] request) {
        this.request = request;
        return this;
    }
    public UpdateSuperfundSecurity security;
    public UpdateSuperfundRequest withSecurity(UpdateSuperfundSecurity security) {
        this.security = security;
        return this;
    }
}