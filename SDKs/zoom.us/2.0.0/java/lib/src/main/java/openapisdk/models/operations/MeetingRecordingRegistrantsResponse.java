package openapisdk.models.operations;



public class MeetingRecordingRegistrantsResponse {
    public byte[] body;
    public MeetingRecordingRegistrantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingRecordingRegistrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingRecordingRegistrantsRecordingRegistrationList recordingRegistrationList;
    public MeetingRecordingRegistrantsResponse withRecordingRegistrationList(MeetingRecordingRegistrantsRecordingRegistrationList recordingRegistrationList) {
        this.recordingRegistrationList = recordingRegistrationList;
        return this;
    }
    public Long statusCode;
    public MeetingRecordingRegistrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}