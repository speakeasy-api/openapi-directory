package openapisdk.models.operations;



public class GetADeviceResponse {
    public byte[] body;
    public GetADeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetADeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetADeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetADevice200ApplicationJson getADevice200ApplicationJSONObject;
    public GetADeviceResponse withGetADevice200ApplicationJsonObject(GetADevice200ApplicationJson getADevice200ApplicationJSONObject) {
        this.getADevice200ApplicationJSONObject = getADevice200ApplicationJSONObject;
        return this;
    }
}