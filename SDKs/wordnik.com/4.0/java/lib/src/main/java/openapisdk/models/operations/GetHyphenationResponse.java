package openapisdk.models.operations;



public class GetHyphenationResponse {
    public byte[] body;
    public GetHyphenationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetHyphenationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHyphenationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}