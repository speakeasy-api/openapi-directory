package openapisdk.models.operations;



public class DomainsGetResponse {
    public String contentType;
    public DomainsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> domain;
    public DomainsGetResponse withDomain(java.util.Map<String, java.util.Map<String, Object>> domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public DomainsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}