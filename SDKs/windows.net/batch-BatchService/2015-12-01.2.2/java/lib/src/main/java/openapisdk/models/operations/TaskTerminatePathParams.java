package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskTerminatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskTerminatePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public TaskTerminatePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}