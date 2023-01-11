package openapisdk.models.operations;



public class UserResponse {
    public byte[] body;
    public UserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public User200ApplicationJson user200ApplicationJSONObject;
    public UserResponse withUser200ApplicationJsonObject(User200ApplicationJson user200ApplicationJSONObject) {
        this.user200ApplicationJSONObject = user200ApplicationJSONObject;
        return this;
    }
}