package openapisdk.models.operations;



public class MeetingRecordingRegistrantCreateResponse {
    public byte[] body;
    public MeetingRecordingRegistrantCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingRecordingRegistrantCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MeetingRecordingRegistrantCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MeetingRecordingRegistrantCreate201ApplicationJson meetingRecordingRegistrantCreate201ApplicationJSONObject;
    public MeetingRecordingRegistrantCreateResponse withMeetingRecordingRegistrantCreate201ApplicationJsonObject(MeetingRecordingRegistrantCreate201ApplicationJson meetingRecordingRegistrantCreate201ApplicationJSONObject) {
        this.meetingRecordingRegistrantCreate201ApplicationJSONObject = meetingRecordingRegistrantCreate201ApplicationJSONObject;
        return this;
    }
}