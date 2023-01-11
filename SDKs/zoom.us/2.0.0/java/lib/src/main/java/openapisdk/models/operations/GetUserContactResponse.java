package openapisdk.models.operations;



public class GetUserContactResponse {
    public byte[] body;
    public GetUserContactResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUserContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserContact200ApplicationJson getUserContact200ApplicationJSONObject;
    public GetUserContactResponse withGetUserContact200ApplicationJsonObject(GetUserContact200ApplicationJson getUserContact200ApplicationJSONObject) {
        this.getUserContact200ApplicationJSONObject = getUserContact200ApplicationJSONObject;
        return this;
    }
}