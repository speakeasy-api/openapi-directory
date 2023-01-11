package openapisdk.models.operations;



public class ValidateBetslipResponse {
    public String contentType;
    public ValidateBetslipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateBetslipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BetSlipResponse betSlipResponse;
    public ValidateBetslipResponse withBetSlipResponse(openapisdk.models.shared.BetSlipResponse betSlipResponse) {
        this.betSlipResponse = betSlipResponse;
        return this;
    }
}