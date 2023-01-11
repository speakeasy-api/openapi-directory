package openapisdk.models.operations;



public class GetScheduledTransactionsResponse {
    public String contentType;
    public GetScheduledTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetScheduledTransactionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ScheduledTransactionsResponse scheduledTransactionsResponse;
    public GetScheduledTransactionsResponse withScheduledTransactionsResponse(openapisdk.models.shared.ScheduledTransactionsResponse scheduledTransactionsResponse) {
        this.scheduledTransactionsResponse = scheduledTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public GetScheduledTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}