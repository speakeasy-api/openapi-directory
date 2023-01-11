package openapisdk.models.operations;



public class ObjectDeleteInvoiceResponse {
    public String contentType;
    public ObjectDeleteInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectDeleteInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse;
    public ObjectDeleteInvoiceResponse withProxyDeleteResponse(openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse) {
        this.proxyDeleteResponse = proxyDeleteResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectDeleteInvoiceResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectDeleteInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}