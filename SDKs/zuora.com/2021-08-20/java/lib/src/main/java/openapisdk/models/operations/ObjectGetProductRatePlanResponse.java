package openapisdk.models.operations;



public class ObjectGetProductRatePlanResponse {
    public String contentType;
    public ObjectGetProductRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetProductRatePlanResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetProductRatePlan;
    public ObjectGetProductRatePlanResponse withProxyGetProductRatePlan(java.util.Map<String, Object> proxyGetProductRatePlan) {
        this.proxyGetProductRatePlan = proxyGetProductRatePlan;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetProductRatePlanResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetProductRatePlanResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetProductRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}