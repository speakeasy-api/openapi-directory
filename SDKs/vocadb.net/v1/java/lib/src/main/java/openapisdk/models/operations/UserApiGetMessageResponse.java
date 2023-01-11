package openapisdk.models.operations;



public class UserApiGetMessageResponse {
    public byte[] body;
    public UserApiGetMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserMessageContract userMessageContract;
    public UserApiGetMessageResponse withUserMessageContract(openapisdk.models.shared.UserMessageContract userMessageContract) {
        this.userMessageContract = userMessageContract;
        return this;
    }
}