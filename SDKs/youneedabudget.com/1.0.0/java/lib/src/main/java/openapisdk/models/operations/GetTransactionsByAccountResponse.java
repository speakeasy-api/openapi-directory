package openapisdk.models.operations;



public class GetTransactionsByAccountResponse {
    public String contentType;
    public GetTransactionsByAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTransactionsByAccountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsByAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionsResponse transactionsResponse;
    public GetTransactionsByAccountResponse withTransactionsResponse(openapisdk.models.shared.TransactionsResponse transactionsResponse) {
        this.transactionsResponse = transactionsResponse;
        return this;
    }
}