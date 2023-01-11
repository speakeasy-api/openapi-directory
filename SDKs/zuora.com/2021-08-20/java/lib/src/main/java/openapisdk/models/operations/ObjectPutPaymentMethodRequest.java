package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutPaymentMethodRequest {
    public ObjectPutPaymentMethodPathParams pathParams;
    public ObjectPutPaymentMethodRequest withPathParams(ObjectPutPaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutPaymentMethodQueryParams queryParams;
    public ObjectPutPaymentMethodRequest withQueryParams(ObjectPutPaymentMethodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutPaymentMethodHeaders headers;
    public ObjectPutPaymentMethodRequest withHeaders(ObjectPutPaymentMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutPaymentMethodRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}