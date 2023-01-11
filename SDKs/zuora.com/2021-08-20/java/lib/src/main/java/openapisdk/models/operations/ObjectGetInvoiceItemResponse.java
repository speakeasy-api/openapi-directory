package openapisdk.models.operations;



public class ObjectGetInvoiceItemResponse {
    public String contentType;
    public ObjectGetInvoiceItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoiceItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetInvoiceItem;
    public ObjectGetInvoiceItemResponse withProxyGetInvoiceItem(java.util.Map<String, Object> proxyGetInvoiceItem) {
        this.proxyGetInvoiceItem = proxyGetInvoiceItem;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoiceItemResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoiceItemResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoiceItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}