package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobGetPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}