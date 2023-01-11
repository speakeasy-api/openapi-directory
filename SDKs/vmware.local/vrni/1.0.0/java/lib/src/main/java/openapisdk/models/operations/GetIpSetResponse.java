package openapisdk.models.operations;



public class GetIpSetResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetIpSetResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseIpSet baseIPSet;
    public GetIpSetResponse withBaseIpSet(openapisdk.models.shared.BaseIpSet baseIPSet) {
        this.baseIPSet = baseIPSet;
        return this;
    }
    public String contentType;
    public GetIpSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIpSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}