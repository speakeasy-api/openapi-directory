package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFeeRequest {
    public CreateFeeHeaders headers;
    public CreateFeeRequest withHeaders(CreateFeeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateFeeRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateFeeSecurity security;
    public CreateFeeRequest withSecurity(CreateFeeSecurity security) {
        this.security = security;
        return this;
    }
}