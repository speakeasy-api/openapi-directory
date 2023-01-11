package openapisdk.models.operations;



public class GetSubscriptionsByKeyResponse {
    public String contentType;
    public GetSubscriptionsByKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getSubscriptionTypeWithSuccess;
    public GetSubscriptionsByKeyResponse withGetSubscriptionTypeWithSuccess(java.util.Map<String, Object> getSubscriptionTypeWithSuccess) {
        this.getSubscriptionTypeWithSuccess = getSubscriptionTypeWithSuccess;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSubscriptionsByKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionsByKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}