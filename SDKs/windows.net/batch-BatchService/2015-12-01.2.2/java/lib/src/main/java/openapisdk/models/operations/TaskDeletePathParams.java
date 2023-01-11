package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskDeletePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public TaskDeletePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}