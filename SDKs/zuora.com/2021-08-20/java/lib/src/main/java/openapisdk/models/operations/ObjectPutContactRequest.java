package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutContactRequest {
    public ObjectPutContactPathParams pathParams;
    public ObjectPutContactRequest withPathParams(ObjectPutContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutContactQueryParams queryParams;
    public ObjectPutContactRequest withQueryParams(ObjectPutContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutContactHeaders headers;
    public ObjectPutContactRequest withHeaders(ObjectPutContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutContactRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}