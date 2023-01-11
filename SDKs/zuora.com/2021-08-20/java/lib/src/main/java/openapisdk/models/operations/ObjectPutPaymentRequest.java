package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutPaymentRequest {
    public ObjectPutPaymentPathParams pathParams;
    public ObjectPutPaymentRequest withPathParams(ObjectPutPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutPaymentQueryParams queryParams;
    public ObjectPutPaymentRequest withQueryParams(ObjectPutPaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutPaymentHeaders headers;
    public ObjectPutPaymentRequest withHeaders(ObjectPutPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutPaymentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}