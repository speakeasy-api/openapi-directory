package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostUsageRequest {
    public ObjectPostUsageQueryParams queryParams;
    public ObjectPostUsageRequest withQueryParams(ObjectPostUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostUsageHeaders headers;
    public ObjectPostUsageRequest withHeaders(ObjectPostUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostUsageRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}