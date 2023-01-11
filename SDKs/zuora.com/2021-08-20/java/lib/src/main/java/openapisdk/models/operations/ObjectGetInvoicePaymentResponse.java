package openapisdk.models.operations;



public class ObjectGetInvoicePaymentResponse {
    public String contentType;
    public ObjectGetInvoicePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetInvoicePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetInvoicePayment proxyGetInvoicePayment;
    public ObjectGetInvoicePaymentResponse withProxyGetInvoicePayment(openapisdk.models.shared.ProxyGetInvoicePayment proxyGetInvoicePayment) {
        this.proxyGetInvoicePayment = proxyGetInvoicePayment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetInvoicePaymentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetInvoicePaymentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetInvoicePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}