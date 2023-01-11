package openapisdk.models.operations;



public class CertificateDeleteRequest {
    public CertificateDeletePathParams pathParams;
    public CertificateDeleteRequest withPathParams(CertificateDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificateDeleteQueryParams queryParams;
    public CertificateDeleteRequest withQueryParams(CertificateDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CertificateDeleteHeaders headers;
    public CertificateDeleteRequest withHeaders(CertificateDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
}