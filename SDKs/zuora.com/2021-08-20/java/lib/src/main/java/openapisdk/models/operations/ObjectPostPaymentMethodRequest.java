package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostPaymentMethodRequest {
    public ObjectPostPaymentMethodQueryParams queryParams;
    public ObjectPostPaymentMethodRequest withQueryParams(ObjectPostPaymentMethodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostPaymentMethodHeaders headers;
    public ObjectPostPaymentMethodRequest withHeaders(ObjectPostPaymentMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostPaymentMethodRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}