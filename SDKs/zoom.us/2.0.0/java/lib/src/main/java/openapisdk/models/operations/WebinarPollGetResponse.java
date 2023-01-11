package openapisdk.models.operations;



public class WebinarPollGetResponse {
    public byte[] body;
    public WebinarPollGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarPollGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public WebinarPollGetPoll poll;
    public WebinarPollGetResponse withPoll(WebinarPollGetPoll poll) {
        this.poll = poll;
        return this;
    }
    public Long statusCode;
    public WebinarPollGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}