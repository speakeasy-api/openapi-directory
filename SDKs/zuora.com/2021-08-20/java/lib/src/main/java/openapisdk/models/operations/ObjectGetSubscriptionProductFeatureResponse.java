package openapisdk.models.operations;



public class ObjectGetSubscriptionProductFeatureResponse {
    public String contentType;
    public ObjectGetSubscriptionProductFeatureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetSubscriptionProductFeatureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetSubscriptionProductFeature;
    public ObjectGetSubscriptionProductFeatureResponse withProxyGetSubscriptionProductFeature(java.util.Map<String, Object> proxyGetSubscriptionProductFeature) {
        this.proxyGetSubscriptionProductFeature = proxyGetSubscriptionProductFeature;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetSubscriptionProductFeatureResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetSubscriptionProductFeatureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetSubscriptionProductFeatureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}