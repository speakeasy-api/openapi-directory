package openapisdk.models.operations;



public class GetNsxManagerResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetNsxManagerResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseEntity baseEntity;
    public GetNsxManagerResponse withBaseEntity(openapisdk.models.shared.BaseEntity baseEntity) {
        this.baseEntity = baseEntity;
        return this;
    }
    public String contentType;
    public GetNsxManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNsxManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}