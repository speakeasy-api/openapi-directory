package openapisdk.models.operations;



public class GetZrProfileResponse {
    public byte[] body;
    public GetZrProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetZrProfile200ApplicationJson getZRProfile200ApplicationJSONObject;
    public GetZrProfileResponse withGetZrProfile200ApplicationJsonObject(GetZrProfile200ApplicationJson getZRProfile200ApplicationJSONObject) {
        this.getZRProfile200ApplicationJSONObject = getZRProfile200ApplicationJSONObject;
        return this;
    }
}