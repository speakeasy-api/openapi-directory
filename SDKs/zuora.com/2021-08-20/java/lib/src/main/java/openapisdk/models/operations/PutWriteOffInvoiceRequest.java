package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWriteOffInvoiceRequest {
    public PutWriteOffInvoicePathParams pathParams;
    public PutWriteOffInvoiceRequest withPathParams(PutWriteOffInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutWriteOffInvoiceHeaders headers;
    public PutWriteOffInvoiceRequest withHeaders(PutWriteOffInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutWriteOffInvoiceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}