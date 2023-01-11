package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayRunRequest {
    public CreatePayRunHeaders headers;
    public CreatePayRunRequest withHeaders(CreatePayRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayRunInput[] request;
    public CreatePayRunRequest withRequest(openapisdk.models.shared.PayRunInput[] request) {
        this.request = request;
        return this;
    }
    public CreatePayRunSecurity security;
    public CreatePayRunRequest withSecurity(CreatePayRunSecurity security) {
        this.security = security;
        return this;
    }
}