package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayItemRequest {
    public CreatePayItemHeaders headers;
    public CreatePayItemRequest withHeaders(CreatePayItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayItemInput request;
    public CreatePayItemRequest withRequest(openapisdk.models.shared.PayItemInput request) {
        this.request = request;
        return this;
    }
    public CreatePayItemSecurity security;
    public CreatePayItemRequest withSecurity(CreatePayItemSecurity security) {
        this.security = security;
        return this;
    }
}