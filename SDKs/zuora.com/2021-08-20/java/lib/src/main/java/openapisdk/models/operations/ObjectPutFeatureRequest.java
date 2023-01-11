package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutFeatureRequest {
    public ObjectPutFeaturePathParams pathParams;
    public ObjectPutFeatureRequest withPathParams(ObjectPutFeaturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutFeatureQueryParams queryParams;
    public ObjectPutFeatureRequest withQueryParams(ObjectPutFeatureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutFeatureHeaders headers;
    public ObjectPutFeatureRequest withHeaders(ObjectPutFeatureHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutFeatureRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}