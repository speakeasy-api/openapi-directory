package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundPaymentRequest {
    public PostRefundPaymentPathParams pathParams;
    public PostRefundPaymentRequest withPathParams(PostRefundPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRefundPaymentHeaders headers;
    public PostRefundPaymentRequest withHeaders(PostRefundPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRefundPaymentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}