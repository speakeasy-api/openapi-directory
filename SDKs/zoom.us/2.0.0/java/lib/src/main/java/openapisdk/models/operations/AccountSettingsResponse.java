package openapisdk.models.operations;



public class AccountSettingsResponse {
    public byte[] body;
    public AccountSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object accountSettings200ApplicationJSONOneOf;
    public AccountSettingsResponse withAccountSettings200ApplicationJsonOneOf(Object accountSettings200ApplicationJSONOneOf) {
        this.accountSettings200ApplicationJSONOneOf = accountSettings200ApplicationJSONOneOf;
        return this;
    }
}