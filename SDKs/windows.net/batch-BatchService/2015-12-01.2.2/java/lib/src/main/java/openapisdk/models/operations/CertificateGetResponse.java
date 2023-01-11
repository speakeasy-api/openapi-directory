package openapisdk.models.operations;



public class CertificateGetResponse {
    public Object batchError;
    public CertificateGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object certificate;
    public CertificateGetResponse withCertificate(Object certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public CertificateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CertificateGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CertificateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}