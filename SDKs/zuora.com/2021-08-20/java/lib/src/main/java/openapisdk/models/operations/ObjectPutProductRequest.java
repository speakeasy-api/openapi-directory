package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRequest {
    public ObjectPutProductPathParams pathParams;
    public ObjectPutProductRequest withPathParams(ObjectPutProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutProductQueryParams queryParams;
    public ObjectPutProductRequest withQueryParams(ObjectPutProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutProductHeaders headers;
    public ObjectPutProductRequest withHeaders(ObjectPutProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutProductRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}