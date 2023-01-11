package openapisdk.models.operations;



public class BulkCreateTransactionsResponse {
    public openapisdk.models.shared.BulkResponse bulkResponse;
    public BulkCreateTransactionsResponse withBulkResponse(openapisdk.models.shared.BulkResponse bulkResponse) {
        this.bulkResponse = bulkResponse;
        return this;
    }
    public String contentType;
    public BulkCreateTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public BulkCreateTransactionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public BulkCreateTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}