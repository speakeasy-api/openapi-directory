package openapisdk.models.operations;



public class LeaveChannelResponse {
    public byte[] body;
    public LeaveChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LeaveChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LeaveChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object leaveChannel204ApplicationJSONAny;
    public LeaveChannelResponse withLeaveChannel204ApplicationJsonAny(Object leaveChannel204ApplicationJSONAny) {
        this.leaveChannel204ApplicationJSONAny = leaveChannel204ApplicationJSONAny;
        return this;
    }
}