package openapisdk.models.operations;



public class DomainsListResponse {
    public String contentType;
    public DomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainListResult domainListResult;
    public DomainsListResponse withDomainListResult(openapisdk.models.shared.DomainListResult domainListResult) {
        this.domainListResult = domainListResult;
        return this;
    }
    public Long statusCode;
    public DomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}