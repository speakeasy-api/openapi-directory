package openapisdk.models.operations;



public class GetZrAccountProfileResponse {
    public byte[] body;
    public GetZrAccountProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrAccountProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrAccountProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetZrAccountProfile200ApplicationJson getZRAccountProfile200ApplicationJSONObject;
    public GetZrAccountProfileResponse withGetZrAccountProfile200ApplicationJsonObject(GetZrAccountProfile200ApplicationJson getZRAccountProfile200ApplicationJSONObject) {
        this.getZRAccountProfile200ApplicationJSONObject = getZRAccountProfile200ApplicationJSONObject;
        return this;
    }
}