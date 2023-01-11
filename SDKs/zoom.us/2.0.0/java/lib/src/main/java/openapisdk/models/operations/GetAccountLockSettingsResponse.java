package openapisdk.models.operations;



public class GetAccountLockSettingsResponse {
    public byte[] body;
    public GetAccountLockSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountLockSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountLockSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getAccountLockSettings200ApplicationJSONObject;
    public GetAccountLockSettingsResponse withGetAccountLockSettings200ApplicationJsonObject(java.util.Map<String, Object> getAccountLockSettings200ApplicationJSONObject) {
        this.getAccountLockSettings200ApplicationJSONObject = getAccountLockSettings200ApplicationJSONObject;
        return this;
    }
}