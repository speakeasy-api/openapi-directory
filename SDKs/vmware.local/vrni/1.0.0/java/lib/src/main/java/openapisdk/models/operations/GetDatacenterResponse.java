package openapisdk.models.operations;



public class GetDatacenterResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetDatacenterResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetDatacenterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDatacenterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VcDatacenter vcDatacenter;
    public GetDatacenterResponse withVcDatacenter(openapisdk.models.shared.VcDatacenter vcDatacenter) {
        this.vcDatacenter = vcDatacenter;
        return this;
    }
}