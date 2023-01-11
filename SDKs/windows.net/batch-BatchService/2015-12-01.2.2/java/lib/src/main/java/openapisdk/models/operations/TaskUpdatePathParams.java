package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskUpdatePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public TaskUpdatePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}