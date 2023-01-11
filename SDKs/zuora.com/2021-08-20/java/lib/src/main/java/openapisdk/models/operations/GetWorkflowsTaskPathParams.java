package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetWorkflowsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}