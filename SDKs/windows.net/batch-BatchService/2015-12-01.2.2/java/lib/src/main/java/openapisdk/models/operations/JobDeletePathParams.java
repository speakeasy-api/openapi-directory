package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobDeletePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}