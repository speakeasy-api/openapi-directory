package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostProductRequest {
    public ObjectPostProductQueryParams queryParams;
    public ObjectPostProductRequest withQueryParams(ObjectPostProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostProductHeaders headers;
    public ObjectPostProductRequest withHeaders(ObjectPostProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostProductRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}