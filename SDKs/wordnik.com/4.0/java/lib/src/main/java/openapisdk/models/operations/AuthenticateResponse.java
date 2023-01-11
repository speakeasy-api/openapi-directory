package openapisdk.models.operations;



public class AuthenticateResponse {
    public byte[] body;
    public AuthenticateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AuthenticateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthenticateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}