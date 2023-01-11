package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostFeatureRequest {
    public ObjectPostFeatureQueryParams queryParams;
    public ObjectPostFeatureRequest withQueryParams(ObjectPostFeatureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostFeatureHeaders headers;
    public ObjectPostFeatureRequest withHeaders(ObjectPostFeatureHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostFeatureRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}