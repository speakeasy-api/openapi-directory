package openapisdk.models.operations;



public class GetExamplesResponse {
    public byte[] body;
    public GetExamplesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetExamplesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetExamplesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}