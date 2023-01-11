package openapisdk.models.operations;



public class ListChannelMembersResponse {
    public byte[] body;
    public ListChannelMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListChannelMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListChannelMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListChannelMembers200ApplicationJson listChannelMembers200ApplicationJSONObject;
    public ListChannelMembersResponse withListChannelMembers200ApplicationJsonObject(ListChannelMembers200ApplicationJson listChannelMembers200ApplicationJSONObject) {
        this.listChannelMembers200ApplicationJSONObject = listChannelMembers200ApplicationJSONObject;
        return this;
    }
}