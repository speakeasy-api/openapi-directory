package openapisdk.models.operations;



public class GetRampMetricsBySubscriptionKeyResponse {
    public String contentType;
    public GetRampMetricsBySubscriptionKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRampMetricsBySubscriptionKeyResponseType getRampMetricsBySubscriptionKeyResponseType;
    public GetRampMetricsBySubscriptionKeyResponse withGetRampMetricsBySubscriptionKeyResponseType(openapisdk.models.shared.GetRampMetricsBySubscriptionKeyResponseType getRampMetricsBySubscriptionKeyResponseType) {
        this.getRampMetricsBySubscriptionKeyResponseType = getRampMetricsBySubscriptionKeyResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRampMetricsBySubscriptionKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRampMetricsBySubscriptionKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}