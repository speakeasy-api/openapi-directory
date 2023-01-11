package openapisdk.models.operations;



public class GetRandomWordsResponse {
    public byte[] body;
    public GetRandomWordsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRandomWordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRandomWordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}