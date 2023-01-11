package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkflowsTasksUpdateRequest {
    public PutWorkflowsTasksUpdateHeaders headers;
    public PutWorkflowsTasksUpdateRequest withHeaders(PutWorkflowsTasksUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutTasksRequest request;
    public PutWorkflowsTasksUpdateRequest withRequest(openapisdk.models.shared.PutTasksRequest request) {
        this.request = request;
        return this;
    }
}