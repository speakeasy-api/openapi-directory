package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentMethodsRequest {
    public PostPaymentMethodsHeaders headers;
    public PostPaymentMethodsRequest withHeaders(PostPaymentMethodsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostPaymentMethodsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}