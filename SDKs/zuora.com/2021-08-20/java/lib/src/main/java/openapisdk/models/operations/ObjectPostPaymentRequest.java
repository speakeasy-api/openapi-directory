package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostPaymentRequest {
    public ObjectPostPaymentQueryParams queryParams;
    public ObjectPostPaymentRequest withQueryParams(ObjectPostPaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostPaymentHeaders headers;
    public ObjectPostPaymentRequest withHeaders(ObjectPostPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostPaymentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}