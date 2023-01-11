package openapisdk.models.operations;



public class ObjectGetProductRatePlanChargeResponse {
    public String contentType;
    public ObjectGetProductRatePlanChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetProductRatePlanChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetProductRatePlanCharge;
    public ObjectGetProductRatePlanChargeResponse withProxyGetProductRatePlanCharge(java.util.Map<String, Object> proxyGetProductRatePlanCharge) {
        this.proxyGetProductRatePlanCharge = proxyGetProductRatePlanCharge;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetProductRatePlanChargeResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetProductRatePlanChargeResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetProductRatePlanChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}