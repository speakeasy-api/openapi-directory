package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinglePaymentIntentRequest {
    public CreateSinglePaymentIntentHeaders headers;
    public CreateSinglePaymentIntentRequest withHeaders(CreateSinglePaymentIntentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateSinglePaymentIntentRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateSinglePaymentIntentSecurity security;
    public CreateSinglePaymentIntentRequest withSecurity(CreateSinglePaymentIntentSecurity security) {
        this.security = security;
        return this;
    }
}