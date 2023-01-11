package openapisdk.models.operations;



public class AccountResponse {
    public byte[] body;
    public AccountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Account200ApplicationJson account200ApplicationJSONObject;
    public AccountResponse withAccount200ApplicationJsonObject(Account200ApplicationJson account200ApplicationJSONObject) {
        this.account200ApplicationJSONObject = account200ApplicationJSONObject;
        return this;
    }
}