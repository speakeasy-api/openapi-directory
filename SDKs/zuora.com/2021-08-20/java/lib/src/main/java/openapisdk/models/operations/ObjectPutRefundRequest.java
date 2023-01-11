package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutRefundRequest {
    public ObjectPutRefundPathParams pathParams;
    public ObjectPutRefundRequest withPathParams(ObjectPutRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutRefundQueryParams queryParams;
    public ObjectPutRefundRequest withQueryParams(ObjectPutRefundQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutRefundHeaders headers;
    public ObjectPutRefundRequest withHeaders(ObjectPutRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutRefundRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}