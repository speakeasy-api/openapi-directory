package openapisdk.models.operations;



public class CertificateCancelDeletionRequest {
    public CertificateCancelDeletionPathParams pathParams;
    public CertificateCancelDeletionRequest withPathParams(CertificateCancelDeletionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificateCancelDeletionQueryParams queryParams;
    public CertificateCancelDeletionRequest withQueryParams(CertificateCancelDeletionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CertificateCancelDeletionHeaders headers;
    public CertificateCancelDeletionRequest withHeaders(CertificateCancelDeletionHeaders headers) {
        this.headers = headers;
        return this;
    }
}