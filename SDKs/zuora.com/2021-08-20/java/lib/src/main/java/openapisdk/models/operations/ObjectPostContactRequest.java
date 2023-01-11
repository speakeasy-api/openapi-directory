package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostContactRequest {
    public ObjectPostContactQueryParams queryParams;
    public ObjectPostContactRequest withQueryParams(ObjectPostContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostContactHeaders headers;
    public ObjectPostContactRequest withHeaders(ObjectPostContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostContactRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}