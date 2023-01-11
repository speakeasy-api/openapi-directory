package openapisdk.models.operations;



public class ObjectGetInvoiceSplitResponse {
    public String contentType;
    public ObjectGetInvoiceSplitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoiceSplitResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetInvoiceSplit proxyGetInvoiceSplit;
    public ObjectGetInvoiceSplitResponse withProxyGetInvoiceSplit(openapisdk.models.shared.ProxyGetInvoiceSplit proxyGetInvoiceSplit) {
        this.proxyGetInvoiceSplit = proxyGetInvoiceSplit;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoiceSplitResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoiceSplitResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoiceSplitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}