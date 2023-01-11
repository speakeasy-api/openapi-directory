package openapisdk.models.operations;



public class UserApiGetCurrentResponse {
    public byte[] body;
    public UserApiGetCurrentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetCurrentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetCurrentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserForApiContract userForApiContract;
    public UserApiGetCurrentResponse withUserForApiContract(openapisdk.models.shared.UserForApiContract userForApiContract) {
        this.userForApiContract = userForApiContract;
        return this;
    }
}