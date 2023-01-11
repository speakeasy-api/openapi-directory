package openapisdk.models.operations;



public class UpdateVcenterResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateVcenterResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateVcenterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateVcenterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VCenterDataSource vCenterDataSource;
    public UpdateVcenterResponse withVCenterDataSource(openapisdk.models.shared.VCenterDataSource vCenterDataSource) {
        this.vCenterDataSource = vCenterDataSource;
        return this;
    }
}