package openapisdk.models.operations;



public class GetDistributedVirtualSwitchResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetDistributedVirtualSwitchResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetDistributedVirtualSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistributedVirtualSwitch distributedVirtualSwitch;
    public GetDistributedVirtualSwitchResponse withDistributedVirtualSwitch(openapisdk.models.shared.DistributedVirtualSwitch distributedVirtualSwitch) {
        this.distributedVirtualSwitch = distributedVirtualSwitch;
        return this;
    }
    public Long statusCode;
    public GetDistributedVirtualSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}