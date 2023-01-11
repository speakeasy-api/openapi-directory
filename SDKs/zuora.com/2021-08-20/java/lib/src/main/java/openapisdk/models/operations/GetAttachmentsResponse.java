package openapisdk.models.operations;



public class GetAttachmentsResponse {
    public String contentType;
    public GetAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAttachmentResponseType getAttachmentResponseType;
    public GetAttachmentsResponse withGetAttachmentResponseType(openapisdk.models.shared.GetAttachmentResponseType getAttachmentResponseType) {
        this.getAttachmentResponseType = getAttachmentResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAttachmentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}