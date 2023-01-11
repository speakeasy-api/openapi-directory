package openapisdk.models.operations;



public class GetSubscriptionsByKeyAndVersionResponse {
    public String contentType;
    public GetSubscriptionsByKeyAndVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getSubscriptionTypeWithSuccess;
    public GetSubscriptionsByKeyAndVersionResponse withGetSubscriptionTypeWithSuccess(java.util.Map<String, Object> getSubscriptionTypeWithSuccess) {
        this.getSubscriptionTypeWithSuccess = getSubscriptionTypeWithSuccess;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSubscriptionsByKeyAndVersionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionsByKeyAndVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}