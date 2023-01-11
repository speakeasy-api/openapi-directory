package openapisdk.models.operations;



public class GetBudgetByIdResponse {
    public openapisdk.models.shared.BudgetDetailResponse budgetDetailResponse;
    public GetBudgetByIdResponse withBudgetDetailResponse(openapisdk.models.shared.BudgetDetailResponse budgetDetailResponse) {
        this.budgetDetailResponse = budgetDetailResponse;
        return this;
    }
    public String contentType;
    public GetBudgetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetBudgetByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetBudgetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}