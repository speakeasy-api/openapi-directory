package openapisdk.models.operations;



public class RemoveAChannelMemberResponse {
    public byte[] body;
    public RemoveAChannelMemberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RemoveAChannelMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveAChannelMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object removeAChannelMember204ApplicationJSONAny;
    public RemoveAChannelMemberResponse withRemoveAChannelMember204ApplicationJsonAny(Object removeAChannelMember204ApplicationJSONAny) {
        this.removeAChannelMember204ApplicationJSONAny = removeAChannelMember204ApplicationJSONAny;
        return this;
    }
}