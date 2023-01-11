package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobListPreparationAndReleaseTaskStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public JobListPreparationAndReleaseTaskStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}