package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSubscriptionRequest {
    public PostSubscriptionHeaders headers;
    public PostSubscriptionRequest withHeaders(PostSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}