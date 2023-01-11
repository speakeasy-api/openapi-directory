package openapisdk.models.operations;



public class GetMonthCategoryByIdResponse {
    public openapisdk.models.shared.CategoryResponse categoryResponse;
    public GetMonthCategoryByIdResponse withCategoryResponse(openapisdk.models.shared.CategoryResponse categoryResponse) {
        this.categoryResponse = categoryResponse;
        return this;
    }
    public String contentType;
    public GetMonthCategoryByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetMonthCategoryByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetMonthCategoryByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}