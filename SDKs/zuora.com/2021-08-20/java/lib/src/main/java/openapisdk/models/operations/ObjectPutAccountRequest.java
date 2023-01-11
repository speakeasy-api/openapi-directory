package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutAccountRequest {
    public ObjectPutAccountPathParams pathParams;
    public ObjectPutAccountRequest withPathParams(ObjectPutAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutAccountQueryParams queryParams;
    public ObjectPutAccountRequest withQueryParams(ObjectPutAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutAccountHeaders headers;
    public ObjectPutAccountRequest withHeaders(ObjectPutAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}