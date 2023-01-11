package openapisdk.models.operations;



public class GetOrderMetricsforEvergreenSubscriptionResponse {
    public String contentType;
    public GetOrderMetricsforEvergreenSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderResponseForEvergreen getOrderResponseForEvergreen;
    public GetOrderMetricsforEvergreenSubscriptionResponse withGetOrderResponseForEvergreen(openapisdk.models.shared.GetOrderResponseForEvergreen getOrderResponseForEvergreen) {
        this.getOrderResponseForEvergreen = getOrderResponseForEvergreen;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrderMetricsforEvergreenSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrderMetricsforEvergreenSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}