package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public TaskAddCollectionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}