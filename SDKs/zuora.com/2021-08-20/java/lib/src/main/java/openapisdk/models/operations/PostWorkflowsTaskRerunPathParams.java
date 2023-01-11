package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkflowsTaskRerunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public PostWorkflowsTaskRerunPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}