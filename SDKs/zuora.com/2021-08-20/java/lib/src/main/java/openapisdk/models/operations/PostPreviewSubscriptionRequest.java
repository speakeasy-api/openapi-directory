package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPreviewSubscriptionRequest {
    public PostPreviewSubscriptionHeaders headers;
    public PostPreviewSubscriptionRequest withHeaders(PostPreviewSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostPreviewSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}