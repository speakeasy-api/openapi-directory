package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoFromInvoiceRequest {
    public PostDebitMemoFromInvoicePathParams pathParams;
    public PostDebitMemoFromInvoiceRequest withPathParams(PostDebitMemoFromInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostDebitMemoFromInvoiceHeaders headers;
    public PostDebitMemoFromInvoiceRequest withHeaders(PostDebitMemoFromInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostDebitMemoFromInvoiceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}