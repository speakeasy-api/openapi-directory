package openapisdk.models.operations;



public class ObjectGetPaymentTransactionLogResponse {
    public String contentType;
    public ObjectGetPaymentTransactionLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetPaymentTransactionLogResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetPaymentTransactionLog proxyGetPaymentTransactionLog;
    public ObjectGetPaymentTransactionLogResponse withProxyGetPaymentTransactionLog(openapisdk.models.shared.ProxyGetPaymentTransactionLog proxyGetPaymentTransactionLog) {
        this.proxyGetPaymentTransactionLog = proxyGetPaymentTransactionLog;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetPaymentTransactionLogResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetPaymentTransactionLogResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetPaymentTransactionLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}