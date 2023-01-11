package openapisdk.models.operations;



public class ObjectGetCreditBalanceAdjustmentResponse {
    public String contentType;
    public ObjectGetCreditBalanceAdjustmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetCreditBalanceAdjustmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetCreditBalanceAdjustment;
    public ObjectGetCreditBalanceAdjustmentResponse withProxyGetCreditBalanceAdjustment(java.util.Map<String, Object> proxyGetCreditBalanceAdjustment) {
        this.proxyGetCreditBalanceAdjustment = proxyGetCreditBalanceAdjustment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetCreditBalanceAdjustmentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetCreditBalanceAdjustmentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetCreditBalanceAdjustmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}