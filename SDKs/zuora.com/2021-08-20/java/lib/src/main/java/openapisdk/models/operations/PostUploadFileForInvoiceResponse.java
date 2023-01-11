package openapisdk.models.operations;



public class PostUploadFileForInvoiceResponse {
    public String contentType;
    public PostUploadFileForInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUploadFileForInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse;
    public PostUploadFileForInvoiceResponse withPostUploadFileResponse(openapisdk.models.shared.PostUploadFileResponse postUploadFileResponse) {
        this.postUploadFileResponse = postUploadFileResponse;
        return this;
    }
    public Long statusCode;
    public PostUploadFileForInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}