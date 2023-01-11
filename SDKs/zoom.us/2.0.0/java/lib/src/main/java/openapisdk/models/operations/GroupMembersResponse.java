package openapisdk.models.operations;



public class GroupMembersResponse {
    public byte[] body;
    public GroupMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GroupMembers200ApplicationJson groupMembers200ApplicationJSONObject;
    public GroupMembersResponse withGroupMembers200ApplicationJsonObject(GroupMembers200ApplicationJson groupMembers200ApplicationJSONObject) {
        this.groupMembers200ApplicationJSONObject = groupMembers200ApplicationJSONObject;
        return this;
    }
}