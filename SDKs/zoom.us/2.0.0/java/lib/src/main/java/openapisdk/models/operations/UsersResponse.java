package openapisdk.models.operations;



public class UsersResponse {
    public byte[] body;
    public UsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Users200ApplicationJson users200ApplicationJSONObject;
    public UsersResponse withUsers200ApplicationJsonObject(Users200ApplicationJson users200ApplicationJSONObject) {
        this.users200ApplicationJSONObject = users200ApplicationJSONObject;
        return this;
    }
}