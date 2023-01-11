package openapisdk.models.operations;



public class GetVmknicResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetVmknicResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetVmknicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVmknicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vmknic vmknic;
    public GetVmknicResponse withVmknic(openapisdk.models.shared.Vmknic vmknic) {
        this.vmknic = vmknic;
        return this;
    }
}