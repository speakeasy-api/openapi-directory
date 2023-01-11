package openapisdk.models.operations;



public class UpdateMonthCategoryResponse {
    public String contentType;
    public UpdateMonthCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateMonthCategoryResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.SaveCategoryResponse saveCategoryResponse;
    public UpdateMonthCategoryResponse withSaveCategoryResponse(openapisdk.models.shared.SaveCategoryResponse saveCategoryResponse) {
        this.saveCategoryResponse = saveCategoryResponse;
        return this;
    }
    public Long statusCode;
    public UpdateMonthCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}