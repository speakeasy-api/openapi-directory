package openapisdk.models.operations;



public class PastMeetingsResponse {
    public byte[] body;
    public PastMeetingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PastMeetingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PastMeetingsMeetingInstances meetingInstances;
    public PastMeetingsResponse withMeetingInstances(PastMeetingsMeetingInstances meetingInstances) {
        this.meetingInstances = meetingInstances;
        return this;
    }
    public Long statusCode;
    public PastMeetingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}