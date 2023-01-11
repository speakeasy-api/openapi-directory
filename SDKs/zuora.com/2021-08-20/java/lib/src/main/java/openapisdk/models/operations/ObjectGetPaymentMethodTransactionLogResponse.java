package openapisdk.models.operations;



public class ObjectGetPaymentMethodTransactionLogResponse {
    public String contentType;
    public ObjectGetPaymentMethodTransactionLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetPaymentMethodTransactionLogResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetPaymentMethodTransactionLog proxyGetPaymentMethodTransactionLog;
    public ObjectGetPaymentMethodTransactionLogResponse withProxyGetPaymentMethodTransactionLog(openapisdk.models.shared.ProxyGetPaymentMethodTransactionLog proxyGetPaymentMethodTransactionLog) {
        this.proxyGetPaymentMethodTransactionLog = proxyGetPaymentMethodTransactionLog;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetPaymentMethodTransactionLogResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetPaymentMethodTransactionLogResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetPaymentMethodTransactionLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}