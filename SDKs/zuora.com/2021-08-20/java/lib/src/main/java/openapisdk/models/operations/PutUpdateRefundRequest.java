package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateRefundRequest {
    public PutUpdateRefundPathParams pathParams;
    public PutUpdateRefundRequest withPathParams(PutUpdateRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateRefundHeaders headers;
    public PutUpdateRefundRequest withHeaders(PutUpdateRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutUpdateRefundRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}