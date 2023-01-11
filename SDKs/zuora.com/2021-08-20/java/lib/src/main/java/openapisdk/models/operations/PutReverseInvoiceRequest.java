package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReverseInvoiceRequest {
    public PutReverseInvoicePathParams pathParams;
    public PutReverseInvoiceRequest withPathParams(PutReverseInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutReverseInvoiceHeaders headers;
    public PutReverseInvoiceRequest withHeaders(PutReverseInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutReverseInvoiceType request;
    public PutReverseInvoiceRequest withRequest(openapisdk.models.shared.PutReverseInvoiceType request) {
        this.request = request;
        return this;
    }
}