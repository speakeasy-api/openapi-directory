package openapisdk.models.operations;



public class UserPaCsResponse {
    public byte[] body;
    public UserPaCsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserPaCsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserPaCsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserPaCs200ApplicationJson userPACs200ApplicationJSONObject;
    public UserPaCsResponse withUserPaCs200ApplicationJsonObject(UserPaCs200ApplicationJson userPACs200ApplicationJSONObject) {
        this.userPACs200ApplicationJSONObject = userPACs200ApplicationJSONObject;
        return this;
    }
}