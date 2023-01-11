package openapisdk.models.operations;



public class GetServiceResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetServiceResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseService baseService;
    public GetServiceResponse withBaseService(openapisdk.models.shared.BaseService baseService) {
        this.baseService = baseService;
        return this;
    }
    public String contentType;
    public GetServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}