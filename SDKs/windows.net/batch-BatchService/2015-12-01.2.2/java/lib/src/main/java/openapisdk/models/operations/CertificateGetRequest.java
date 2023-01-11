package openapisdk.models.operations;



public class CertificateGetRequest {
    public CertificateGetPathParams pathParams;
    public CertificateGetRequest withPathParams(CertificateGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificateGetQueryParams queryParams;
    public CertificateGetRequest withQueryParams(CertificateGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CertificateGetHeaders headers;
    public CertificateGetRequest withHeaders(CertificateGetHeaders headers) {
        this.headers = headers;
        return this;
    }
}