package openapisdk.models.operations;



public class UpdateTransactionResponse {
    public String contentType;
    public UpdateTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateTransactionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionResponse transactionResponse;
    public UpdateTransactionResponse withTransactionResponse(openapisdk.models.shared.TransactionResponse transactionResponse) {
        this.transactionResponse = transactionResponse;
        return this;
    }
}