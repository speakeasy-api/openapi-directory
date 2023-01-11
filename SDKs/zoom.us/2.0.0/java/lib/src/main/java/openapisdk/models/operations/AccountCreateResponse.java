package openapisdk.models.operations;



public class AccountCreateResponse {
    public byte[] body;
    public AccountCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AccountCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AccountCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountCreate201ApplicationJson accountCreate201ApplicationJSONObject;
    public AccountCreateResponse withAccountCreate201ApplicationJsonObject(AccountCreate201ApplicationJson accountCreate201ApplicationJSONObject) {
        this.accountCreate201ApplicationJSONObject = accountCreate201ApplicationJSONObject;
        return this;
    }
}