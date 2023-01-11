package openapisdk.models.operations;



public class GetWordOfTheDayResponse {
    public byte[] body;
    public GetWordOfTheDayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWordOfTheDayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWordOfTheDayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}