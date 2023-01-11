package openapisdk.models.operations;



public class ObjectGetProductRatePlanChargeTierResponse {
    public String contentType;
    public ObjectGetProductRatePlanChargeTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetProductRatePlanChargeTierResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetProductRatePlanChargeTier proxyGetProductRatePlanChargeTier;
    public ObjectGetProductRatePlanChargeTierResponse withProxyGetProductRatePlanChargeTier(openapisdk.models.shared.ProxyGetProductRatePlanChargeTier proxyGetProductRatePlanChargeTier) {
        this.proxyGetProductRatePlanChargeTier = proxyGetProductRatePlanChargeTier;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetProductRatePlanChargeTierResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetProductRatePlanChargeTierResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetProductRatePlanChargeTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}