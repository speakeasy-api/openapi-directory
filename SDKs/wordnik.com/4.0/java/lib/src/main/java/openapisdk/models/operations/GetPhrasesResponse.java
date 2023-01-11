package openapisdk.models.operations;



public class GetPhrasesResponse {
    public byte[] body;
    public GetPhrasesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPhrasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhrasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}