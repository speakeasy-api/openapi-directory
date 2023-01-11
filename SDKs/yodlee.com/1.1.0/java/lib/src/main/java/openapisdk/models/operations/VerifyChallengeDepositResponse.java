package openapisdk.models.operations;



public class VerifyChallengeDepositResponse {
    public String contentType;
    public VerifyChallengeDepositResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyChallengeDepositResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerificationResponse verificationResponse;
    public VerifyChallengeDepositResponse withVerificationResponse(openapisdk.models.shared.VerificationResponse verificationResponse) {
        this.verificationResponse = verificationResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public VerifyChallengeDepositResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}