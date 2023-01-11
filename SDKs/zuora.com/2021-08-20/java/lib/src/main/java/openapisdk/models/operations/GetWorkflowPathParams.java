package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public String workflowId;
    public GetWorkflowPathParams withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}