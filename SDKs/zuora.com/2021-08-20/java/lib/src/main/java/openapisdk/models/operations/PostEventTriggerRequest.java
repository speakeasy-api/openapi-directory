package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEventTriggerRequest {
    public PostEventTriggerHeaders headers;
    public PostEventTriggerRequest withHeaders(PostEventTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostEventTriggerRequest request;
    public PostEventTriggerRequest withRequest(openapisdk.models.shared.PostEventTriggerRequest request) {
        this.request = request;
        return this;
    }
}