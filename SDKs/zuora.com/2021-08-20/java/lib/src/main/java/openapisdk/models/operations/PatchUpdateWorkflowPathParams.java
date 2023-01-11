package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUpdateWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public String workflowId;
    public PatchUpdateWorkflowPathParams withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}