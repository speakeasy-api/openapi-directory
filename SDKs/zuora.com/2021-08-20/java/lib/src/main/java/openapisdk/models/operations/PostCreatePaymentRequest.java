package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePaymentRequest {
    public PostCreatePaymentHeaders headers;
    public PostCreatePaymentRequest withHeaders(PostCreatePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostCreatePaymentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}