package openapisdk.models.operations;



public class MeetingRegistrantCreateResponse {
    public byte[] body;
    public MeetingRegistrantCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingRegistrantCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MeetingRegistrantCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MeetingRegistrantCreate201ApplicationJson meetingRegistrantCreate201ApplicationJSONObject;
    public MeetingRegistrantCreateResponse withMeetingRegistrantCreate201ApplicationJsonObject(MeetingRegistrantCreate201ApplicationJson meetingRegistrantCreate201ApplicationJSONObject) {
        this.meetingRegistrantCreate201ApplicationJSONObject = meetingRegistrantCreate201ApplicationJSONObject;
        return this;
    }
}