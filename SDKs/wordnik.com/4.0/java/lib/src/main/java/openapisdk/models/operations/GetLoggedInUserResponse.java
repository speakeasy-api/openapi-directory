package openapisdk.models.operations;



public class GetLoggedInUserResponse {
    public byte[] body;
    public GetLoggedInUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLoggedInUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoggedInUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}