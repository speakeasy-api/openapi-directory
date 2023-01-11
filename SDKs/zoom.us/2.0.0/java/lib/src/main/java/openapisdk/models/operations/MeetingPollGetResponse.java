package openapisdk.models.operations;



public class MeetingPollGetResponse {
    public byte[] body;
    public MeetingPollGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingPollGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingPollGetPoll poll;
    public MeetingPollGetResponse withPoll(MeetingPollGetPoll poll) {
        this.poll = poll;
        return this;
    }
    public Long statusCode;
    public MeetingPollGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}