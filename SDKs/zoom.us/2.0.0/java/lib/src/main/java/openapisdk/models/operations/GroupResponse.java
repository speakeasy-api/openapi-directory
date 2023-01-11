package openapisdk.models.operations;



public class GroupResponse {
    public byte[] body;
    public GroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Group200ApplicationJson group200ApplicationJSONObject;
    public GroupResponse withGroup200ApplicationJsonObject(Group200ApplicationJson group200ApplicationJSONObject) {
        this.group200ApplicationJSONObject = group200ApplicationJSONObject;
        return this;
    }
}