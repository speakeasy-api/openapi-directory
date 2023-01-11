package openapisdk.models.operations;



public class GetUsageResponse {
    public String contentType;
    public GetUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUsageWrapper getUsageWrapper;
    public GetUsageResponse withGetUsageWrapper(openapisdk.models.shared.GetUsageWrapper getUsageWrapper) {
        this.getUsageWrapper = getUsageWrapper;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetUsageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}