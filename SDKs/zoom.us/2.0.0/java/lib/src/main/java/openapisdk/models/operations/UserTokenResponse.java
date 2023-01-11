package openapisdk.models.operations;



public class UserTokenResponse {
    public byte[] body;
    public UserTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserToken200ApplicationJson userToken200ApplicationJSONObject;
    public UserTokenResponse withUserToken200ApplicationJsonObject(UserToken200ApplicationJson userToken200ApplicationJSONObject) {
        this.userToken200ApplicationJSONObject = userToken200ApplicationJSONObject;
        return this;
    }
}