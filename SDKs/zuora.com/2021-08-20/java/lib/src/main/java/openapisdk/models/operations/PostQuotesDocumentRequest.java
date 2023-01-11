package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuotesDocumentRequest {
    public PostQuotesDocumentHeaders headers;
    public PostQuotesDocumentRequest withHeaders(PostQuotesDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostQuoteDocType request;
    public PostQuotesDocumentRequest withRequest(openapisdk.models.shared.PostQuoteDocType request) {
        this.request = request;
        return this;
    }
}