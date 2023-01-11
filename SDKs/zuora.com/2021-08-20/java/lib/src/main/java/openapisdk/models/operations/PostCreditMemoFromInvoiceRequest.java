package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreditMemoFromInvoiceRequest {
    public PostCreditMemoFromInvoicePathParams pathParams;
    public PostCreditMemoFromInvoiceRequest withPathParams(PostCreditMemoFromInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCreditMemoFromInvoiceHeaders headers;
    public PostCreditMemoFromInvoiceRequest withHeaders(PostCreditMemoFromInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostCreditMemoFromInvoiceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}