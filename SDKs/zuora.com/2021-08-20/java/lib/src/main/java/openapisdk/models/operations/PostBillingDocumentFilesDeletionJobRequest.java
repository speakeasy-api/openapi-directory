package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingDocumentFilesDeletionJobRequest {
    public PostBillingDocumentFilesDeletionJobHeaders headers;
    public PostBillingDocumentFilesDeletionJobRequest withHeaders(PostBillingDocumentFilesDeletionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostBillingDocumentFilesDeletionJobRequest request;
    public PostBillingDocumentFilesDeletionJobRequest withRequest(openapisdk.models.shared.PostBillingDocumentFilesDeletionJobRequest request) {
        this.request = request;
        return this;
    }
}