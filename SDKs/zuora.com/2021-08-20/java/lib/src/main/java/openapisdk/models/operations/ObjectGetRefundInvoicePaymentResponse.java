package openapisdk.models.operations;



public class ObjectGetRefundInvoicePaymentResponse {
    public String contentType;
    public ObjectGetRefundInvoicePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetRefundInvoicePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetRefundInvoicePayment proxyGetRefundInvoicePayment;
    public ObjectGetRefundInvoicePaymentResponse withProxyGetRefundInvoicePayment(openapisdk.models.shared.ProxyGetRefundInvoicePayment proxyGetRefundInvoicePayment) {
        this.proxyGetRefundInvoicePayment = proxyGetRefundInvoicePayment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetRefundInvoicePaymentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetRefundInvoicePaymentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetRefundInvoicePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}