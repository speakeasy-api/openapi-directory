package openapisdk.models.operations;



public class GetVcenterManagerResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetVcenterManagerResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetVcenterManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVcenterManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VCenterManager vCenterManager;
    public GetVcenterManagerResponse withVCenterManager(openapisdk.models.shared.VCenterManager vCenterManager) {
        this.vCenterManager = vCenterManager;
        return this;
    }
}