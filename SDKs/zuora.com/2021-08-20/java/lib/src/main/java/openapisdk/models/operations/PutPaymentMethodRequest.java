package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPaymentMethodRequest {
    public PutPaymentMethodPathParams pathParams;
    public PutPaymentMethodRequest withPathParams(PutPaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPaymentMethodHeaders headers;
    public PutPaymentMethodRequest withHeaders(PutPaymentMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutPaymentMethodRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}