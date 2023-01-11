package openapisdk.models.operations;



public class GetLayer2NetworkResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetLayer2NetworkResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseL2Network baseL2Network;
    public GetLayer2NetworkResponse withBaseL2Network(openapisdk.models.shared.BaseL2Network baseL2Network) {
        this.baseL2Network = baseL2Network;
        return this;
    }
    public String contentType;
    public GetLayer2NetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLayer2NetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}