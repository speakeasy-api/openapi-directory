package openapisdk.models.operations;



public class SamlLoginResponse {
    public String contentType;
    public SamlLoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SamlLoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public SamlLoginResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public SamlLoginResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}