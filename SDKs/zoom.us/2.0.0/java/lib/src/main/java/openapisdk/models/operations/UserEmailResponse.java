package openapisdk.models.operations;



public class UserEmailResponse {
    public byte[] body;
    public UserEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserEmail200ApplicationJson userEmail200ApplicationJSONObject;
    public UserEmailResponse withUserEmail200ApplicationJsonObject(UserEmail200ApplicationJson userEmail200ApplicationJSONObject) {
        this.userEmail200ApplicationJSONObject = userEmail200ApplicationJSONObject;
        return this;
    }
}