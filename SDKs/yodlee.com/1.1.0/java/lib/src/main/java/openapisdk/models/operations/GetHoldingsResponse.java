package openapisdk.models.operations;



public class GetHoldingsResponse {
    public String contentType;
    public GetHoldingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HoldingResponse holdingResponse;
    public GetHoldingsResponse withHoldingResponse(openapisdk.models.shared.HoldingResponse holdingResponse) {
        this.holdingResponse = holdingResponse;
        return this;
    }
    public Long statusCode;
    public GetHoldingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetHoldingsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}