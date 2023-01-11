package openapisdk.models.operations;



public class ObjectGetInvoiceSplitItemResponse {
    public String contentType;
    public ObjectGetInvoiceSplitItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoiceSplitItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetInvoiceSplitItem proxyGetInvoiceSplitItem;
    public ObjectGetInvoiceSplitItemResponse withProxyGetInvoiceSplitItem(openapisdk.models.shared.ProxyGetInvoiceSplitItem proxyGetInvoiceSplitItem) {
        this.proxyGetInvoiceSplitItem = proxyGetInvoiceSplitItem;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoiceSplitItemResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoiceSplitItemResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoiceSplitItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}