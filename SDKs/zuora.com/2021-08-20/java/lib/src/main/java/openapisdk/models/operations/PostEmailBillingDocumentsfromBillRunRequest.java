package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailBillingDocumentsfromBillRunRequest {
    public PostEmailBillingDocumentsfromBillRunPathParams pathParams;
    public PostEmailBillingDocumentsfromBillRunRequest withPathParams(PostEmailBillingDocumentsfromBillRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmailBillingDocumentsfromBillRunHeaders headers;
    public PostEmailBillingDocumentsfromBillRunRequest withHeaders(PostEmailBillingDocumentsfromBillRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostEmailBillingDocfromBillRunType request;
    public PostEmailBillingDocumentsfromBillRunRequest withRequest(openapisdk.models.shared.PostEmailBillingDocfromBillRunType request) {
        this.request = request;
        return this;
    }
}