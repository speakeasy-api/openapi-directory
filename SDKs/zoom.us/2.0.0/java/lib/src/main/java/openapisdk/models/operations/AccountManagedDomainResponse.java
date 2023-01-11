package openapisdk.models.operations;



public class AccountManagedDomainResponse {
    public byte[] body;
    public AccountManagedDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountManagedDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountManagedDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountManagedDomain200ApplicationJson accountManagedDomain200ApplicationJSONObject;
    public AccountManagedDomainResponse withAccountManagedDomain200ApplicationJsonObject(AccountManagedDomain200ApplicationJson accountManagedDomain200ApplicationJSONObject) {
        this.accountManagedDomain200ApplicationJSONObject = accountManagedDomain200ApplicationJSONObject;
        return this;
    }
}