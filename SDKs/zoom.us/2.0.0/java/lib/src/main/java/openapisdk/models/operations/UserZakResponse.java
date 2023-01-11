package openapisdk.models.operations;



public class UserZakResponse {
    public byte[] body;
    public UserZakResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserZakResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserZakResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserZak200ApplicationJson userZak200ApplicationJSONObject;
    public UserZakResponse withUserZak200ApplicationJsonObject(UserZak200ApplicationJson userZak200ApplicationJSONObject) {
        this.userZak200ApplicationJSONObject = userZak200ApplicationJSONObject;
        return this;
    }
}