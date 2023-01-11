package openapisdk.models.operations;



public class PastMeetingParticipantsResponse {
    public byte[] body;
    public PastMeetingParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PastMeetingParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PastMeetingParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PastMeetingParticipants200ApplicationJson pastMeetingParticipants200ApplicationJSONObject;
    public PastMeetingParticipantsResponse withPastMeetingParticipants200ApplicationJsonObject(PastMeetingParticipants200ApplicationJson pastMeetingParticipants200ApplicationJSONObject) {
        this.pastMeetingParticipants200ApplicationJSONObject = pastMeetingParticipants200ApplicationJSONObject;
        return this;
    }
}