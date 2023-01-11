package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdatePaymentRequest {
    public PutUpdatePaymentPathParams pathParams;
    public PutUpdatePaymentRequest withPathParams(PutUpdatePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdatePaymentHeaders headers;
    public PutUpdatePaymentRequest withHeaders(PutUpdatePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutUpdatePaymentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}