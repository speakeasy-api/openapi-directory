package openapisdk.models.operations;



public class GetVmResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetVmResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseVirtualMachine baseVirtualMachine;
    public GetVmResponse withBaseVirtualMachine(openapisdk.models.shared.BaseVirtualMachine baseVirtualMachine) {
        this.baseVirtualMachine = baseVirtualMachine;
        return this;
    }
    public String contentType;
    public GetVmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}