package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateBillingDocumentsRequest {
    public PostGenerateBillingDocumentsPathParams pathParams;
    public PostGenerateBillingDocumentsRequest withPathParams(PostGenerateBillingDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostGenerateBillingDocumentsHeaders headers;
    public PostGenerateBillingDocumentsRequest withHeaders(PostGenerateBillingDocumentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostGenerateBillingDocumentType request;
    public PostGenerateBillingDocumentsRequest withRequest(openapisdk.models.shared.PostGenerateBillingDocumentType request) {
        this.request = request;
        return this;
    }
}