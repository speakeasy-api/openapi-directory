package openapisdk.models.operations;



public class ObjectGetProductFeatureResponse {
    public String contentType;
    public ObjectGetProductFeatureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetProductFeatureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetProductFeature;
    public ObjectGetProductFeatureResponse withProxyGetProductFeature(java.util.Map<String, Object> proxyGetProductFeature) {
        this.proxyGetProductFeature = proxyGetProductFeature;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetProductFeatureResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetProductFeatureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetProductFeatureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}