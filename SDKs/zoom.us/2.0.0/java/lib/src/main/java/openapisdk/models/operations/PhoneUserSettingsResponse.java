package openapisdk.models.operations;



public class PhoneUserSettingsResponse {
    public byte[] body;
    public PhoneUserSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhoneUserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneUserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PhoneUserSettings200ApplicationJson phoneUserSettings200ApplicationJSONObject;
    public PhoneUserSettingsResponse withPhoneUserSettings200ApplicationJsonObject(PhoneUserSettings200ApplicationJson phoneUserSettings200ApplicationJSONObject) {
        this.phoneUserSettings200ApplicationJSONObject = phoneUserSettings200ApplicationJSONObject;
        return this;
    }
}