package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostRefundRequest {
    public ObjectPostRefundQueryParams queryParams;
    public ObjectPostRefundRequest withQueryParams(ObjectPostRefundQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostRefundHeaders headers;
    public ObjectPostRefundRequest withHeaders(ObjectPostRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostRefundRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}