package openapisdk.models.operations;



public class GetScrabbleScoreResponse {
    public byte[] body;
    public GetScrabbleScoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetScrabbleScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetScrabbleScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}