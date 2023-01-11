package openapisdk.models.operations;



public class InitiateMatchingOrChallengeDepositeVerificationResponse {
    public String contentType;
    public InitiateMatchingOrChallengeDepositeVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InitiateMatchingOrChallengeDepositeVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerificationResponse verificationResponse;
    public InitiateMatchingOrChallengeDepositeVerificationResponse withVerificationResponse(openapisdk.models.shared.VerificationResponse verificationResponse) {
        this.verificationResponse = verificationResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public InitiateMatchingOrChallengeDepositeVerificationResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}