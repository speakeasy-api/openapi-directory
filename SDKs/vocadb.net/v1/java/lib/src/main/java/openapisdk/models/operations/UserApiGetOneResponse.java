package openapisdk.models.operations;



public class UserApiGetOneResponse {
    public byte[] body;
    public UserApiGetOneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserForApiContract userForApiContract;
    public UserApiGetOneResponse withUserForApiContract(openapisdk.models.shared.UserForApiContract userForApiContract) {
        this.userForApiContract = userForApiContract;
        return this;
    }
}