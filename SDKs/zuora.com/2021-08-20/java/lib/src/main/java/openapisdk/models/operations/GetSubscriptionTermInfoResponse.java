package openapisdk.models.operations;



public class GetSubscriptionTermInfoResponse {
    public String contentType;
    public GetSubscriptionTermInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSubscriptionTermInfoResponseType getSubscriptionTermInfoResponseType;
    public GetSubscriptionTermInfoResponse withGetSubscriptionTermInfoResponseType(openapisdk.models.shared.GetSubscriptionTermInfoResponseType getSubscriptionTermInfoResponseType) {
        this.getSubscriptionTermInfoResponseType = getSubscriptionTermInfoResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSubscriptionTermInfoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionTermInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}