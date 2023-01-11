package openapisdk.models.operations;



public class UserTspCreateResponse {
    public byte[] body;
    public UserTspCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserTspCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserTspCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserTspCreateTspAccountsList tspAccountsList;
    public UserTspCreateResponse withTspAccountsList(UserTspCreateTspAccountsList tspAccountsList) {
        this.tspAccountsList = tspAccountsList;
        return this;
    }
}