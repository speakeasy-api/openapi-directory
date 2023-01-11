package openapisdk.models.operations;



public class PostQuotesDocumentResponse {
    public String contentType;
    public PostQuotesDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostQuotesDocumentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostQuoteDocResponseType postQuoteDocResponseType;
    public PostQuotesDocumentResponse withPostQuoteDocResponseType(openapisdk.models.shared.PostQuoteDocResponseType postQuoteDocResponseType) {
        this.postQuoteDocResponseType = postQuoteDocResponseType;
        return this;
    }
    public Long statusCode;
    public PostQuotesDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}