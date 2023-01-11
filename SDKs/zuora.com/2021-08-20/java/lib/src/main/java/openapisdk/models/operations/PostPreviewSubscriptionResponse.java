package openapisdk.models.operations;



public class PostPreviewSubscriptionResponse {
    public String contentType;
    public PostPreviewSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPreviewSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostSubscriptionPreviewResponseType postSubscriptionPreviewResponseType;
    public PostPreviewSubscriptionResponse withPostSubscriptionPreviewResponseType(openapisdk.models.shared.PostSubscriptionPreviewResponseType postSubscriptionPreviewResponseType) {
        this.postSubscriptionPreviewResponseType = postSubscriptionPreviewResponseType;
        return this;
    }
    public Long statusCode;
    public PostPreviewSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}