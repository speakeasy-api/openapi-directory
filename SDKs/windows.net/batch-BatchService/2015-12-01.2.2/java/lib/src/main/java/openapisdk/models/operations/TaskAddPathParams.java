package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskAddPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}