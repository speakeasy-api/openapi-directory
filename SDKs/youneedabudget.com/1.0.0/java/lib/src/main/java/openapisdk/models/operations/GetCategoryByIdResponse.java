package openapisdk.models.operations;



public class GetCategoryByIdResponse {
    public openapisdk.models.shared.CategoryResponse categoryResponse;
    public GetCategoryByIdResponse withCategoryResponse(openapisdk.models.shared.CategoryResponse categoryResponse) {
        this.categoryResponse = categoryResponse;
        return this;
    }
    public String contentType;
    public GetCategoryByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCategoryByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCategoryByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}