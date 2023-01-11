package openapisdk.models.operations;



public class GetVerificationStatusResponse {
    public String contentType;
    public GetVerificationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVerificationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerificationStatusResponse verificationStatusResponse;
    public GetVerificationStatusResponse withVerificationStatusResponse(openapisdk.models.shared.VerificationStatusResponse verificationStatusResponse) {
        this.verificationStatusResponse = verificationStatusResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetVerificationStatusResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}