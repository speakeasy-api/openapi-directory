package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobTerminatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobTerminatePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}