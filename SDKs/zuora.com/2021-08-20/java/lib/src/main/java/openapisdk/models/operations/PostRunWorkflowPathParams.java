package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRunWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public Long workflowId;
    public PostRunWorkflowPathParams withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}