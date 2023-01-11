package openapisdk.models.operations;



public class PostUploadFileForCreditMemoResponse {
    public String contentType;
    public PostUploadFileForCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUploadFileForCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse;
    public PostUploadFileForCreditMemoResponse withPostUploadFileResponse(openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse) {
        this.postUploadFileResponse = postUploadFileResponse;
        return this;
    }
    public Long statusCode;
    public PostUploadFileForCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}