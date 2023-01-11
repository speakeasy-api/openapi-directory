package openapisdk.models.operations;



public class WebinarPollCreateResponse {
    public byte[] body;
    public WebinarPollCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarPollCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public WebinarPollCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public WebinarPollCreatePoll2 poll;
    public WebinarPollCreateResponse withPoll(WebinarPollCreatePoll2 poll) {
        this.poll = poll;
        return this;
    }
    public Long statusCode;
    public WebinarPollCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}