package openapisdk.models.operations;



public class UserCreateResponse {
    public byte[] body;
    public UserCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UserCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UserCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserCreate201ApplicationJson userCreate201ApplicationJSONObject;
    public UserCreateResponse withUserCreate201ApplicationJsonObject(UserCreate201ApplicationJson userCreate201ApplicationJSONObject) {
        this.userCreate201ApplicationJSONObject = userCreate201ApplicationJSONObject;
        return this;
    }
}