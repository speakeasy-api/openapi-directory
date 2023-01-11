package openapisdk.models.operations;



public class InitiateAccountVerificationResponse {
    public String contentType;
    public InitiateAccountVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InitiateAccountVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyAccountResponse verifyAccountResponse;
    public InitiateAccountVerificationResponse withVerifyAccountResponse(openapisdk.models.shared.VerifyAccountResponse verifyAccountResponse) {
        this.verifyAccountResponse = verifyAccountResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public InitiateAccountVerificationResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}