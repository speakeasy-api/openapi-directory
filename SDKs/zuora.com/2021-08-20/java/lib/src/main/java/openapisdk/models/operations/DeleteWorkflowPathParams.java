package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public String workflowId;
    public DeleteWorkflowPathParams withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}