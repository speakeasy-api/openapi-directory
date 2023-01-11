package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkflowImportRequest {
    public PostWorkflowImportHeaders headers;
    public PostWorkflowImportRequest withHeaders(PostWorkflowImportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostWorkflowImportRequestBody request;
    public PostWorkflowImportRequest withRequest(PostWorkflowImportRequestBody request) {
        this.request = request;
        return this;
    }
}