package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostAccountRequest {
    public ObjectPostAccountQueryParams queryParams;
    public ObjectPostAccountRequest withQueryParams(ObjectPostAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostAccountHeaders headers;
    public ObjectPostAccountRequest withHeaders(ObjectPostAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}