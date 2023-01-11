package openapisdk.models.operations;



public class InviteChannelMembersResponse {
    public byte[] body;
    public InviteChannelMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public InviteChannelMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InviteChannelMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InviteChannelMembers201ApplicationJson inviteChannelMembers201ApplicationJSONObject;
    public InviteChannelMembersResponse withInviteChannelMembers201ApplicationJsonObject(InviteChannelMembers201ApplicationJson inviteChannelMembers201ApplicationJSONObject) {
        this.inviteChannelMembers201ApplicationJSONObject = inviteChannelMembers201ApplicationJSONObject;
        return this;
    }
}