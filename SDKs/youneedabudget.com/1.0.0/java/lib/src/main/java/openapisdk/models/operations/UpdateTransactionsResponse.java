package openapisdk.models.operations;



public class UpdateTransactionsResponse {
    public String contentType;
    public UpdateTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateTransactionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.SaveTransactionsResponse saveTransactionsResponse;
    public UpdateTransactionsResponse withSaveTransactionsResponse(openapisdk.models.shared.SaveTransactionsResponse saveTransactionsResponse) {
        this.saveTransactionsResponse = saveTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public UpdateTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}