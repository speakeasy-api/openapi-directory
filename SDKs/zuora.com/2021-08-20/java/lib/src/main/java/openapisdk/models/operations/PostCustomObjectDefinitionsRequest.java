package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectDefinitionsRequest {
    public PostCustomObjectDefinitionsHeaders headers;
    public PostCustomObjectDefinitionsRequest withHeaders(PostCustomObjectDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCustomObjectDefinitionsRequest request;
    public PostCustomObjectDefinitionsRequest withRequest(openapisdk.models.shared.PostCustomObjectDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}