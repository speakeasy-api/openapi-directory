package openapisdk.models.operations;



public class UserTspResponse {
    public byte[] body;
    public UserTspResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserTspResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserTspResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserTspTspAccount tspAccount;
    public UserTspResponse withTspAccount(UserTspTspAccount tspAccount) {
        this.tspAccount = tspAccount;
        return this;
    }
}