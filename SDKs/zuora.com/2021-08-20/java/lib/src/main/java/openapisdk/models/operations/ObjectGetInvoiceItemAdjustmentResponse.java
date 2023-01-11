package openapisdk.models.operations;



public class ObjectGetInvoiceItemAdjustmentResponse {
    public String contentType;
    public ObjectGetInvoiceItemAdjustmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoiceItemAdjustmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetInvoiceItemAdjustment;
    public ObjectGetInvoiceItemAdjustmentResponse withProxyGetInvoiceItemAdjustment(java.util.Map<String, Object> proxyGetInvoiceItemAdjustment) {
        this.proxyGetInvoiceItemAdjustment = proxyGetInvoiceItemAdjustment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoiceItemAdjustmentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoiceItemAdjustmentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoiceItemAdjustmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}