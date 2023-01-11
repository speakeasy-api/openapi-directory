package openapisdk.models.operations;



public class MeetingCreateResponse {
    public byte[] body;
    public MeetingCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MeetingCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MeetingCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MeetingCreate201ApplicationJson meetingCreate201ApplicationJSONObject;
    public MeetingCreateResponse withMeetingCreate201ApplicationJsonObject(MeetingCreate201ApplicationJson meetingCreate201ApplicationJSONObject) {
        this.meetingCreate201ApplicationJSONObject = meetingCreate201ApplicationJSONObject;
        return this;
    }
}