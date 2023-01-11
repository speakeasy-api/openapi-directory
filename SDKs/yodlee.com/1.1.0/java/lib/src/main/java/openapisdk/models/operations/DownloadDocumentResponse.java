package openapisdk.models.operations;



public class DownloadDocumentResponse {
    public String contentType;
    public DownloadDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentDownloadResponse documentDownloadResponse;
    public DownloadDocumentResponse withDocumentDownloadResponse(openapisdk.models.shared.DocumentDownloadResponse documentDownloadResponse) {
        this.documentDownloadResponse = documentDownloadResponse;
        return this;
    }
    public Long statusCode;
    public DownloadDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public DownloadDocumentResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}