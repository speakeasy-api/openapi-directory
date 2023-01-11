package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountRequest {
    public PostAccountHeaders headers;
    public PostAccountRequest withHeaders(PostAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}