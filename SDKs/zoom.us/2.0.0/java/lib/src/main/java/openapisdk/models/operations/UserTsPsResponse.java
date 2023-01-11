package openapisdk.models.operations;



public class UserTsPsResponse {
    public byte[] body;
    public UserTsPsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserTsPsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserTsPsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserTsPs200ApplicationJson userTSPs200ApplicationJSONObject;
    public UserTsPsResponse withUserTsPs200ApplicationJsonObject(UserTsPs200ApplicationJson userTSPs200ApplicationJSONObject) {
        this.userTSPs200ApplicationJSONObject = userTSPs200ApplicationJSONObject;
        return this;
    }
}