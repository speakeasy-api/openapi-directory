package openapisdk.models.operations;



public class GetHistoricalBalancesResponse {
    public openapisdk.models.shared.AccountHistoricalBalancesResponse accountHistoricalBalancesResponse;
    public GetHistoricalBalancesResponse withAccountHistoricalBalancesResponse(openapisdk.models.shared.AccountHistoricalBalancesResponse accountHistoricalBalancesResponse) {
        this.accountHistoricalBalancesResponse = accountHistoricalBalancesResponse;
        return this;
    }
    public String contentType;
    public GetHistoricalBalancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHistoricalBalancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetHistoricalBalancesResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}