package openapisdk.models.operations;



public class MeetingPollCreateResponse {
    public byte[] body;
    public MeetingPollCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingPollCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MeetingPollCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public MeetingPollCreatePoll2 poll;
    public MeetingPollCreateResponse withPoll(MeetingPollCreatePoll2 poll) {
        this.poll = poll;
        return this;
    }
    public Long statusCode;
    public MeetingPollCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}