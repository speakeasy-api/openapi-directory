package openapisdk.models.operations;



public class GetZrSettingsResponse {
    public byte[] body;
    public GetZrSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getZRSettings200ApplicationJSONObject;
    public GetZrSettingsResponse withGetZrSettings200ApplicationJsonObject(java.util.Map<String, Object> getZRSettings200ApplicationJSONObject) {
        this.getZRSettings200ApplicationJSONObject = getZRSettings200ApplicationJSONObject;
        return this;
    }
}