package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobPatchPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}