package openapisdk.models.operations;



public class GetSubscriptionsByAccountResponse {
    public String contentType;
    public GetSubscriptionsByAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSubscriptionWrapper getSubscriptionWrapper;
    public GetSubscriptionsByAccountResponse withGetSubscriptionWrapper(openapisdk.models.shared.GetSubscriptionWrapper getSubscriptionWrapper) {
        this.getSubscriptionWrapper = getSubscriptionWrapper;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSubscriptionsByAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionsByAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}