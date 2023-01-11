package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailInvoiceRequest {
    public PostEmailInvoicePathParams pathParams;
    public PostEmailInvoiceRequest withPathParams(PostEmailInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmailInvoiceHeaders headers;
    public PostEmailInvoiceRequest withHeaders(PostEmailInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostInvoiceEmailRequestType request;
    public PostEmailInvoiceRequest withRequest(openapisdk.models.shared.PostInvoiceEmailRequestType request) {
        this.request = request;
        return this;
    }
}