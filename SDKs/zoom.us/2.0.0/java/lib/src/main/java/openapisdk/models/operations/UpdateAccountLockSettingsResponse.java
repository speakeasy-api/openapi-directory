package openapisdk.models.operations;



public class UpdateAccountLockSettingsResponse {
    public byte[] body;
    public UpdateAccountLockSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateAccountLockSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAccountLockSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateAccountLockSettings200ApplicationJSONAny;
    public UpdateAccountLockSettingsResponse withUpdateAccountLockSettings200ApplicationJsonAny(Object updateAccountLockSettings200ApplicationJSONAny) {
        this.updateAccountLockSettings200ApplicationJSONAny = updateAccountLockSettings200ApplicationJSONAny;
        return this;
    }
    public java.util.Map<String, Object> updateAccountLockSettings204ApplicationJSONObject;
    public UpdateAccountLockSettingsResponse withUpdateAccountLockSettings204ApplicationJsonObject(java.util.Map<String, Object> updateAccountLockSettings204ApplicationJSONObject) {
        this.updateAccountLockSettings204ApplicationJSONObject = updateAccountLockSettings204ApplicationJSONObject;
        return this;
    }
}