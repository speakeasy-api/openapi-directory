package openapisdk.models.operations;



public class InMeetingRecordingControlResponse {
    public byte[] body;
    public InMeetingRecordingControlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public InMeetingRecordingControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InMeetingRecordingControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inMeetingRecordingControl202ApplicationJSONAny;
    public InMeetingRecordingControlResponse withInMeetingRecordingControl202ApplicationJsonAny(Object inMeetingRecordingControl202ApplicationJSONAny) {
        this.inMeetingRecordingControl202ApplicationJSONAny = inMeetingRecordingControl202ApplicationJSONAny;
        return this;
    }
}