package openapisdk.models.operations;



public class GetSecurityGroupResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetSecurityGroupResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseSecurityGroup baseSecurityGroup;
    public GetSecurityGroupResponse withBaseSecurityGroup(openapisdk.models.shared.BaseSecurityGroup baseSecurityGroup) {
        this.baseSecurityGroup = baseSecurityGroup;
        return this;
    }
    public String contentType;
    public GetSecurityGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSecurityGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}