package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionInvoicePaymentRequest {
    public PostTransactionInvoicePaymentHeaders headers;
    public PostTransactionInvoicePaymentRequest withHeaders(PostTransactionInvoicePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostInvoiceCollectType request;
    public PostTransactionInvoicePaymentRequest withRequest(openapisdk.models.shared.PostInvoiceCollectType request) {
        this.request = request;
        return this;
    }
}