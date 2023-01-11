package openapisdk.models.operations;



public class GetHoldingSummaryResponse {
    public String contentType;
    public GetHoldingSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DerivedHoldingSummaryResponse derivedHoldingSummaryResponse;
    public GetHoldingSummaryResponse withDerivedHoldingSummaryResponse(openapisdk.models.shared.DerivedHoldingSummaryResponse derivedHoldingSummaryResponse) {
        this.derivedHoldingSummaryResponse = derivedHoldingSummaryResponse;
        return this;
    }
    public Long statusCode;
    public GetHoldingSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetHoldingSummaryResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}