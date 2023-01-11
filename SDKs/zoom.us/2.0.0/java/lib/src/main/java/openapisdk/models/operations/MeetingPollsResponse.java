package openapisdk.models.operations;



public class MeetingPollsResponse {
    public byte[] body;
    public MeetingPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingPollsPollList pollList;
    public MeetingPollsResponse withPollList(MeetingPollsPollList pollList) {
        this.pollList = pollList;
        return this;
    }
    public Long statusCode;
    public MeetingPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}