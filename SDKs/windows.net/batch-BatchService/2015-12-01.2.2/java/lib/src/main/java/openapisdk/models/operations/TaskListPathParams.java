package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskListPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}