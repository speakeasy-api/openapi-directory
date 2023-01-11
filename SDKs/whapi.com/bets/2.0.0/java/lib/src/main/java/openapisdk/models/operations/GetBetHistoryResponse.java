package openapisdk.models.operations;



public class GetBetHistoryResponse {
    public String contentType;
    public GetBetHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBetHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BetHistoryResponse betHistoryResponse;
    public GetBetHistoryResponse withBetHistoryResponse(openapisdk.models.shared.BetHistoryResponse betHistoryResponse) {
        this.betHistoryResponse = betHistoryResponse;
        return this;
    }
    public openapisdk.models.shared.Errors errors;
    public GetBetHistoryResponse withErrors(openapisdk.models.shared.Errors errors) {
        this.errors = errors;
        return this;
    }
}