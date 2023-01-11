package openapisdk.models.operations;



public class GetSuperfundsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetSuperfundsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetSuperfundsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSuperfundsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperFunds superFunds;
    public GetSuperfundsResponse withSuperFunds(openapisdk.models.shared.SuperFunds superFunds) {
        this.superFunds = superFunds;
        return this;
    }
}