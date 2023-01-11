package openapisdk.models.operations;



public class GetTransactionSummaryResponse {
    public String contentType;
    public GetTransactionSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DerivedTransactionSummaryResponse derivedTransactionSummaryResponse;
    public GetTransactionSummaryResponse withDerivedTransactionSummaryResponse(openapisdk.models.shared.DerivedTransactionSummaryResponse derivedTransactionSummaryResponse) {
        this.derivedTransactionSummaryResponse = derivedTransactionSummaryResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetTransactionSummaryResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}