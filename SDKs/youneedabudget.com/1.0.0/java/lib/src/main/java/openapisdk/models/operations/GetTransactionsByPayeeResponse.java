package openapisdk.models.operations;



public class GetTransactionsByPayeeResponse {
    public String contentType;
    public GetTransactionsByPayeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTransactionsByPayeeResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.HybridTransactionsResponse hybridTransactionsResponse;
    public GetTransactionsByPayeeResponse withHybridTransactionsResponse(openapisdk.models.shared.HybridTransactionsResponse hybridTransactionsResponse) {
        this.hybridTransactionsResponse = hybridTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsByPayeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}