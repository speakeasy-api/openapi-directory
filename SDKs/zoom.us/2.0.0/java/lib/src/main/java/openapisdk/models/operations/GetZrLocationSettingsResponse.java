package openapisdk.models.operations;



public class GetZrLocationSettingsResponse {
    public byte[] body;
    public GetZrLocationSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrLocationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrLocationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getZRLocationSettings200ApplicationJSONObject;
    public GetZrLocationSettingsResponse withGetZrLocationSettings200ApplicationJsonObject(java.util.Map<String, Object> getZRLocationSettings200ApplicationJSONObject) {
        this.getZRLocationSettings200ApplicationJSONObject = getZRLocationSettings200ApplicationJSONObject;
        return this;
    }
}