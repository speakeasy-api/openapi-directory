package openapisdk.models.operations;



public class WebinarPollsResponse {
    public byte[] body;
    public WebinarPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public WebinarPollsPollList pollList;
    public WebinarPollsResponse withPollList(WebinarPollsPollList pollList) {
        this.pollList = pollList;
        return this;
    }
    public Long statusCode;
    public WebinarPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}