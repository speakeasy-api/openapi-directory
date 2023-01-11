package openapisdk.models.operations;



public class UserSettingsResponse {
    public byte[] body;
    public UserSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userSettings200ApplicationJSONOneOf;
    public UserSettingsResponse withUserSettings200ApplicationJsonOneOf(Object userSettings200ApplicationJSONOneOf) {
        this.userSettings200ApplicationJSONOneOf = userSettings200ApplicationJSONOneOf;
        return this;
    }
}