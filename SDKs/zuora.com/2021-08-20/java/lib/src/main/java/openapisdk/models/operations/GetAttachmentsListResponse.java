package openapisdk.models.operations;



public class GetAttachmentsListResponse {
    public String contentType;
    public GetAttachmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAttachmentsResponseType getAttachmentsResponseType;
    public GetAttachmentsListResponse withGetAttachmentsResponseType(openapisdk.models.shared.GetAttachmentsResponseType getAttachmentsResponseType) {
        this.getAttachmentsResponseType = getAttachmentsResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAttachmentsListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAttachmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}