package openapisdk.models.operations;



public class CreateTransactionResponse {
    public String contentType;
    public CreateTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTransactionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.SaveTransactionsResponse saveTransactionsResponse;
    public CreateTransactionResponse withSaveTransactionsResponse(openapisdk.models.shared.SaveTransactionsResponse saveTransactionsResponse) {
        this.saveTransactionsResponse = saveTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public CreateTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}