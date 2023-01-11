package openapisdk.models.operations;



public class GetZrAccountSettingsResponse {
    public byte[] body;
    public GetZrAccountSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getZRAccountSettings200ApplicationJSONObject;
    public GetZrAccountSettingsResponse withGetZrAccountSettings200ApplicationJsonObject(java.util.Map<String, Object> getZRAccountSettings200ApplicationJSONObject) {
        this.getZRAccountSettings200ApplicationJSONObject = getZRAccountSettings200ApplicationJSONObject;
        return this;
    }
}