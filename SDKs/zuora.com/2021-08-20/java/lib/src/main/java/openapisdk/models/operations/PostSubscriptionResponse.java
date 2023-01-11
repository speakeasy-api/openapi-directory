package openapisdk.models.operations;



public class PostSubscriptionResponse {
    public String contentType;
    public PostSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostSubscriptionResponseType postSubscriptionResponseType;
    public PostSubscriptionResponse withPostSubscriptionResponseType(openapisdk.models.shared.PostSubscriptionResponseType postSubscriptionResponseType) {
        this.postSubscriptionResponseType = postSubscriptionResponseType;
        return this;
    }
    public Long statusCode;
    public PostSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}