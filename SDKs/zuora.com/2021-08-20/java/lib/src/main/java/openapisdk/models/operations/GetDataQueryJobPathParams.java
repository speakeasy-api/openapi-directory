package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataQueryJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job-id")
    public String jobId;
    public GetDataQueryJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}