package openapisdk.models.operations;



public class GetSecuritiesResponse {
    public String contentType;
    public GetSecuritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HoldingSecuritiesResponse holdingSecuritiesResponse;
    public GetSecuritiesResponse withHoldingSecuritiesResponse(openapisdk.models.shared.HoldingSecuritiesResponse holdingSecuritiesResponse) {
        this.holdingSecuritiesResponse = holdingSecuritiesResponse;
        return this;
    }
    public Long statusCode;
    public GetSecuritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetSecuritiesResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}