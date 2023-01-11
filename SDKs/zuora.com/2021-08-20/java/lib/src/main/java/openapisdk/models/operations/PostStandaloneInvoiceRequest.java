package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStandaloneInvoiceRequest {
    public PostStandaloneInvoiceHeaders headers;
    public PostStandaloneInvoiceRequest withHeaders(PostStandaloneInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostStandaloneInvoiceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}