package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateAddRequest {
    public CertificateAddQueryParams queryParams;
    public CertificateAddRequest withQueryParams(CertificateAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CertificateAddHeaders headers;
    public CertificateAddRequest withHeaders(CertificateAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateAddRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}