package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUpdateWorkflowRequest {
    public PatchUpdateWorkflowPathParams pathParams;
    public PatchUpdateWorkflowRequest withPathParams(PatchUpdateWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchUpdateWorkflowHeaders headers;
    public PatchUpdateWorkflowRequest withHeaders(PatchUpdateWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchUpdateWorkflowRequestBody request;
    public PatchUpdateWorkflowRequest withRequest(PatchUpdateWorkflowRequestBody request) {
        this.request = request;
        return this;
    }
}