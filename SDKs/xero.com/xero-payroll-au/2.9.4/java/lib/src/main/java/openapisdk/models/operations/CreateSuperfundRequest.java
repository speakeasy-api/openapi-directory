package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSuperfundRequest {
    public CreateSuperfundHeaders headers;
    public CreateSuperfundRequest withHeaders(CreateSuperfundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuperFundInput[] request;
    public CreateSuperfundRequest withRequest(openapisdk.models.shared.SuperFundInput[] request) {
        this.request = request;
        return this;
    }
    public CreateSuperfundSecurity security;
    public CreateSuperfundRequest withSecurity(CreateSuperfundSecurity security) {
        this.security = security;
        return this;
    }
}