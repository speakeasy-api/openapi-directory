package openapisdk.models.operations;



public class ObjectGetInvoiceAdjustmentResponse {
    public String contentType;
    public ObjectGetInvoiceAdjustmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoiceAdjustmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetInvoiceAdjustment;
    public ObjectGetInvoiceAdjustmentResponse withProxyGetInvoiceAdjustment(java.util.Map<String, Object> proxyGetInvoiceAdjustment) {
        this.proxyGetInvoiceAdjustment = proxyGetInvoiceAdjustment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoiceAdjustmentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoiceAdjustmentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoiceAdjustmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}