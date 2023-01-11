package openapisdk.models.operations;



public class CertificateListResponse {
    public Object batchError;
    public CertificateListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object certificateListResult;
    public CertificateListResponse withCertificateListResult(Object certificateListResult) {
        this.certificateListResult = certificateListResult;
        return this;
    }
    public String contentType;
    public CertificateListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CertificateListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CertificateListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}