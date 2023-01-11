package openapisdk.models.operations;



public class UserVanityNameResponse {
    public byte[] body;
    public UserVanityNameResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserVanityNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserVanityNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserVanityName200ApplicationJson userVanityName200ApplicationJSONObject;
    public UserVanityNameResponse withUserVanityName200ApplicationJsonObject(UserVanityName200ApplicationJson userVanityName200ApplicationJSONObject) {
        this.userVanityName200ApplicationJSONObject = userVanityName200ApplicationJSONObject;
        return this;
    }
}