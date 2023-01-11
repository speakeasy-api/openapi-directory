package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBatchUpdateInvoicesRequest {
    public PutBatchUpdateInvoicesHeaders headers;
    public PutBatchUpdateInvoicesRequest withHeaders(PutBatchUpdateInvoicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutBatchInvoiceType request;
    public PutBatchUpdateInvoicesRequest withRequest(openapisdk.models.shared.PutBatchInvoiceType request) {
        this.request = request;
        return this;
    }
}