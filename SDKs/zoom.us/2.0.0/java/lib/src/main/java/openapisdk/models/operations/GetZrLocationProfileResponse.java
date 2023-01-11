package openapisdk.models.operations;



public class GetZrLocationProfileResponse {
    public byte[] body;
    public GetZrLocationProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrLocationProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrLocationProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetZrLocationProfile200ApplicationJson getZRLocationProfile200ApplicationJSONObject;
    public GetZrLocationProfileResponse withGetZrLocationProfile200ApplicationJsonObject(GetZrLocationProfile200ApplicationJson getZRLocationProfile200ApplicationJSONObject) {
        this.getZRLocationProfile200ApplicationJSONObject = getZRLocationProfile200ApplicationJSONObject;
        return this;
    }
}