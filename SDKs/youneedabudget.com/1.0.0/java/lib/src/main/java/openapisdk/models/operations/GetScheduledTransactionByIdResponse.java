package openapisdk.models.operations;



public class GetScheduledTransactionByIdResponse {
    public String contentType;
    public GetScheduledTransactionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetScheduledTransactionByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ScheduledTransactionResponse scheduledTransactionResponse;
    public GetScheduledTransactionByIdResponse withScheduledTransactionResponse(openapisdk.models.shared.ScheduledTransactionResponse scheduledTransactionResponse) {
        this.scheduledTransactionResponse = scheduledTransactionResponse;
        return this;
    }
    public Long statusCode;
    public GetScheduledTransactionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}