package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobUpdatePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}