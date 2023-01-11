package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEntitiesRequest {
    public PostEntitiesHeaders headers;
    public PostEntitiesRequest withHeaders(PostEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEntityType request;
    public PostEntitiesRequest withRequest(openapisdk.models.shared.CreateEntityType request) {
        this.request = request;
        return this;
    }
}