package openapisdk.models.operations;



public class GetTransactionsByCategoryResponse {
    public String contentType;
    public GetTransactionsByCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTransactionsByCategoryResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.HybridTransactionsResponse hybridTransactionsResponse;
    public GetTransactionsByCategoryResponse withHybridTransactionsResponse(openapisdk.models.shared.HybridTransactionsResponse hybridTransactionsResponse) {
        this.hybridTransactionsResponse = hybridTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsByCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}