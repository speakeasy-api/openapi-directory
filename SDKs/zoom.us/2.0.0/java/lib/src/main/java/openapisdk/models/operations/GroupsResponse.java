package openapisdk.models.operations;



public class GroupsResponse {
    public byte[] body;
    public GroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Groups200ApplicationJson groups200ApplicationJSONObject;
    public GroupsResponse withGroups200ApplicationJsonObject(Groups200ApplicationJson groups200ApplicationJSONObject) {
        this.groups200ApplicationJSONObject = groups200ApplicationJSONObject;
        return this;
    }
}