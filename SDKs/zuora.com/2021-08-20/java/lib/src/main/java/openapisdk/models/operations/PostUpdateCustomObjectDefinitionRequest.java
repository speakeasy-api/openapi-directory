package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateCustomObjectDefinitionRequest {
    public PostUpdateCustomObjectDefinitionHeaders headers;
    public PostUpdateCustomObjectDefinitionRequest withHeaders(PostUpdateCustomObjectDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsRequest request;
    public PostUpdateCustomObjectDefinitionRequest withRequest(openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}