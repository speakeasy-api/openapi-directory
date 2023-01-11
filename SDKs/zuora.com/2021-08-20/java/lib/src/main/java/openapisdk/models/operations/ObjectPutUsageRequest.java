package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutUsageRequest {
    public ObjectPutUsagePathParams pathParams;
    public ObjectPutUsageRequest withPathParams(ObjectPutUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutUsageQueryParams queryParams;
    public ObjectPutUsageRequest withQueryParams(ObjectPutUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutUsageHeaders headers;
    public ObjectPutUsageRequest withHeaders(ObjectPutUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutUsageRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}