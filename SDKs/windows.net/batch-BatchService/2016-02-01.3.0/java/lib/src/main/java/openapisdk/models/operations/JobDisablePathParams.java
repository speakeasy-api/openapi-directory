package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobDisablePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}