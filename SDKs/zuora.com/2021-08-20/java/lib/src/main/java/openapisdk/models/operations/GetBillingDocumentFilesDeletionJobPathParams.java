package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBillingDocumentFilesDeletionJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetBillingDocumentFilesDeletionJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}