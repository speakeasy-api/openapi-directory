package openapisdk.models.operations;



public class GroupMembersCreateResponse {
    public byte[] body;
    public GroupMembersCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupMembersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupMembersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object groupMembersCreate201ApplicationJSONAny;
    public GroupMembersCreateResponse withGroupMembersCreate201ApplicationJsonAny(Object groupMembersCreate201ApplicationJSONAny) {
        this.groupMembersCreate201ApplicationJSONAny = groupMembersCreate201ApplicationJSONAny;
        return this;
    }
}