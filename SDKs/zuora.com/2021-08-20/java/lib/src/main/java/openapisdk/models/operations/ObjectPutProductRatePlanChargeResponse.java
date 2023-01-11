package openapisdk.models.operations;



public class ObjectPutProductRatePlanChargeResponse {
    public String contentType;
    public ObjectPutProductRatePlanChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPutProductRatePlanChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPutProductRatePlanChargeResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectPutProductRatePlanChargeResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPutProductRatePlanChargeResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPutProductRatePlanChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}