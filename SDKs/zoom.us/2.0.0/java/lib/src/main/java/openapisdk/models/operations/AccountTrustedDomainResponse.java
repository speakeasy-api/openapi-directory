package openapisdk.models.operations;



public class AccountTrustedDomainResponse {
    public byte[] body;
    public AccountTrustedDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountTrustedDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountTrustedDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object accountTrustedDomain200ApplicationJSONAny;
    public AccountTrustedDomainResponse withAccountTrustedDomain200ApplicationJsonAny(Object accountTrustedDomain200ApplicationJSONAny) {
        this.accountTrustedDomain200ApplicationJSONAny = accountTrustedDomain200ApplicationJSONAny;
        return this;
    }
}