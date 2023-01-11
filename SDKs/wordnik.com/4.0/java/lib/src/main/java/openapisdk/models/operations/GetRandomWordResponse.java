package openapisdk.models.operations;



public class GetRandomWordResponse {
    public byte[] body;
    public GetRandomWordResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRandomWordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRandomWordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}