package openapisdk.models.operations;



public class CertificateAddResponse {
    public Object batchError;
    public CertificateAddResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public CertificateAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CertificateAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CertificateAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}