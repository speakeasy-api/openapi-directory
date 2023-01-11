package openapisdk.models.operations;



public class GetBudgetsResponse {
    public openapisdk.models.shared.BudgetSummaryResponse budgetSummaryResponse;
    public GetBudgetsResponse withBudgetSummaryResponse(openapisdk.models.shared.BudgetSummaryResponse budgetSummaryResponse) {
        this.budgetSummaryResponse = budgetSummaryResponse;
        return this;
    }
    public String contentType;
    public GetBudgetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetBudgetsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetBudgetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}