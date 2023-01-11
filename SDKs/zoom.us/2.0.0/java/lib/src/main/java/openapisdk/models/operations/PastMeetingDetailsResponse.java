package openapisdk.models.operations;



public class PastMeetingDetailsResponse {
    public byte[] body;
    public PastMeetingDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PastMeetingDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PastMeetingDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PastMeetingDetails200ApplicationJson pastMeetingDetails200ApplicationJSONObject;
    public PastMeetingDetailsResponse withPastMeetingDetails200ApplicationJsonObject(PastMeetingDetails200ApplicationJson pastMeetingDetails200ApplicationJSONObject) {
        this.pastMeetingDetails200ApplicationJSONObject = pastMeetingDetails200ApplicationJSONObject;
        return this;
    }
}