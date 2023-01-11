package openapisdk.models.operations;



public class GetDistributedVirtualPortgroupResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetDistributedVirtualPortgroupResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetDistributedVirtualPortgroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistributedVirtualPortgroup distributedVirtualPortgroup;
    public GetDistributedVirtualPortgroupResponse withDistributedVirtualPortgroup(openapisdk.models.shared.DistributedVirtualPortgroup distributedVirtualPortgroup) {
        this.distributedVirtualPortgroup = distributedVirtualPortgroup;
        return this;
    }
    public Long statusCode;
    public GetDistributedVirtualPortgroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}