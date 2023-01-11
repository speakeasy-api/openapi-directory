package openapisdk.models.operations;



public class GetTopExampleResponse {
    public byte[] body;
    public GetTopExampleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTopExampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTopExampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}