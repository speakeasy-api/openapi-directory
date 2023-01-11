package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataQueryJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job-id")
    public String jobId;
    public DeleteDataQueryJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}