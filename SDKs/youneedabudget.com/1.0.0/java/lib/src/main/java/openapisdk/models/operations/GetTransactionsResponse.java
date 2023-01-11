package openapisdk.models.operations;



public class GetTransactionsResponse {
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTransactionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionsResponse transactionsResponse;
    public GetTransactionsResponse withTransactionsResponse(openapisdk.models.shared.TransactionsResponse transactionsResponse) {
        this.transactionsResponse = transactionsResponse;
        return this;
    }
}