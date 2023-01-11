package openapisdk.models.operations;



public class AuthenticatePostResponse {
    public byte[] body;
    public AuthenticatePostResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AuthenticatePostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthenticatePostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}