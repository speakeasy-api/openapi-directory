package openapisdk.models.operations;



public class PostAttachmentsResponse {
    public String contentType;
    public PostAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAttachmentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostAttachmentResponseType postAttachmentResponseType;
    public PostAttachmentsResponse withPostAttachmentResponseType(openapisdk.models.shared.PostAttachmentResponseType postAttachmentResponseType) {
        this.postAttachmentResponseType = postAttachmentResponseType;
        return this;
    }
    public Long statusCode;
    public PostAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}