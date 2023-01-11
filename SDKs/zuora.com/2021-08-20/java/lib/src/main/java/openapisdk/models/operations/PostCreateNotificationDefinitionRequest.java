package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNotificationDefinitionRequest {
    public PostCreateNotificationDefinitionHeaders headers;
    public PostCreateNotificationDefinitionRequest withHeaders(PostCreateNotificationDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostPublicNotificationDefinitionRequest request;
    public PostCreateNotificationDefinitionRequest withRequest(openapisdk.models.shared.PostPublicNotificationDefinitionRequest request) {
        this.request = request;
        return this;
    }
}