package openapisdk.models.operations;



public class PostUsageResponse {
    public String contentType;
    public PostUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUsageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostUsageResponseType postUsageResponseType;
    public PostUsageResponse withPostUsageResponseType(openapisdk.models.shared.PostUsageResponseType postUsageResponseType) {
        this.postUsageResponseType = postUsageResponseType;
        return this;
    }
    public Long statusCode;
    public PostUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}