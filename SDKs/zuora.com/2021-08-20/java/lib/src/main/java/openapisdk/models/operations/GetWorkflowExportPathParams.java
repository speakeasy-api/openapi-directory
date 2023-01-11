package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public Long workflowId;
    public GetWorkflowExportPathParams withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}