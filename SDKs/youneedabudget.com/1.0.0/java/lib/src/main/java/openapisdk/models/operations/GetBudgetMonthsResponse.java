package openapisdk.models.operations;



public class GetBudgetMonthsResponse {
    public String contentType;
    public GetBudgetMonthsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetBudgetMonthsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.MonthSummariesResponse monthSummariesResponse;
    public GetBudgetMonthsResponse withMonthSummariesResponse(openapisdk.models.shared.MonthSummariesResponse monthSummariesResponse) {
        this.monthSummariesResponse = monthSummariesResponse;
        return this;
    }
    public Long statusCode;
    public GetBudgetMonthsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}