package openapisdk.models.operations;



public class PostUploadFileForDebitMemoResponse {
    public String contentType;
    public PostUploadFileForDebitMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUploadFileForDebitMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse;
    public PostUploadFileForDebitMemoResponse withPostUploadFileResponse(openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse) {
        this.postUploadFileResponse = postUploadFileResponse;
        return this;
    }
    public Long statusCode;
    public PostUploadFileForDebitMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}