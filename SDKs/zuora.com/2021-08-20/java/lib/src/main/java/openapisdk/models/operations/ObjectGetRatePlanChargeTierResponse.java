package openapisdk.models.operations;



public class ObjectGetRatePlanChargeTierResponse {
    public String contentType;
    public ObjectGetRatePlanChargeTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetRatePlanChargeTierResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetRatePlanChargeTier proxyGetRatePlanChargeTier;
    public ObjectGetRatePlanChargeTierResponse withProxyGetRatePlanChargeTier(openapisdk.models.shared.ProxyGetRatePlanChargeTier proxyGetRatePlanChargeTier) {
        this.proxyGetRatePlanChargeTier = proxyGetRatePlanChargeTier;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetRatePlanChargeTierResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetRatePlanChargeTierResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetRatePlanChargeTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}