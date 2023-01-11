package openapisdk.models.operations;



public class ObjectGetRatePlanChargeResponse {
    public String contentType;
    public ObjectGetRatePlanChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetRatePlanChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetRatePlanCharge;
    public ObjectGetRatePlanChargeResponse withProxyGetRatePlanCharge(java.util.Map<String, Object> proxyGetRatePlanCharge) {
        this.proxyGetRatePlanCharge = proxyGetRatePlanCharge;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetRatePlanChargeResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetRatePlanChargeResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetRatePlanChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}