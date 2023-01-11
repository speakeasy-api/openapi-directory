package openapisdk.models.operations;



public class GetBudgetMonthResponse {
    public String contentType;
    public GetBudgetMonthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetBudgetMonthResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.MonthDetailResponse monthDetailResponse;
    public GetBudgetMonthResponse withMonthDetailResponse(openapisdk.models.shared.MonthDetailResponse monthDetailResponse) {
        this.monthDetailResponse = monthDetailResponse;
        return this;
    }
    public Long statusCode;
    public GetBudgetMonthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}