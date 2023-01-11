package openapisdk.models.operations;



public class UserApiGetMessagesResponse {
    public byte[] body;
    public UserApiGetMessagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultUserMessageContract partialFindResultUserMessageContract;
    public UserApiGetMessagesResponse withPartialFindResultUserMessageContract(openapisdk.models.shared.PartialFindResultUserMessageContract partialFindResultUserMessageContract) {
        this.partialFindResultUserMessageContract = partialFindResultUserMessageContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}