package openapisdk.models.operations;



public class DeleteFileResponse {
    public String contentType;
    public DeleteFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}