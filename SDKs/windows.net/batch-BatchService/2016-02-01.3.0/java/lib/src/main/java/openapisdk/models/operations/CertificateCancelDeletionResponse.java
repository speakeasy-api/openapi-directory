package openapisdk.models.operations;



public class CertificateCancelDeletionResponse {
    public Object batchError;
    public CertificateCancelDeletionResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public CertificateCancelDeletionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CertificateCancelDeletionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CertificateCancelDeletionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}