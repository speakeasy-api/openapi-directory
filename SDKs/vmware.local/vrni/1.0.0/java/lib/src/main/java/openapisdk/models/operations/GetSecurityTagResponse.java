package openapisdk.models.operations;



public class GetSecurityTagResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetSecurityTagResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetSecurityTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecurityTag securityTag;
    public GetSecurityTagResponse withSecurityTag(openapisdk.models.shared.SecurityTag securityTag) {
        this.securityTag = securityTag;
        return this;
    }
    public Long statusCode;
    public GetSecurityTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}