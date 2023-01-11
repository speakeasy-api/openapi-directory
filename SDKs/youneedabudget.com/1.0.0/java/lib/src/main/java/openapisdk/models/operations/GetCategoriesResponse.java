package openapisdk.models.operations;



public class GetCategoriesResponse {
    public openapisdk.models.shared.CategoriesResponse categoriesResponse;
    public GetCategoriesResponse withCategoriesResponse(openapisdk.models.shared.CategoriesResponse categoriesResponse) {
        this.categoriesResponse = categoriesResponse;
        return this;
    }
    public String contentType;
    public GetCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCategoriesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}