package openapisdk.models.operations;



public class GetBudgetSettingsByIdResponse {
    public openapisdk.models.shared.BudgetSettingsResponse budgetSettingsResponse;
    public GetBudgetSettingsByIdResponse withBudgetSettingsResponse(openapisdk.models.shared.BudgetSettingsResponse budgetSettingsResponse) {
        this.budgetSettingsResponse = budgetSettingsResponse;
        return this;
    }
    public String contentType;
    public GetBudgetSettingsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetBudgetSettingsByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetBudgetSettingsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}