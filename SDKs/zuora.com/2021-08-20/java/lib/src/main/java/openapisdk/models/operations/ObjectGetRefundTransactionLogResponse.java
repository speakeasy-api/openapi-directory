package openapisdk.models.operations;



public class ObjectGetRefundTransactionLogResponse {
    public String contentType;
    public ObjectGetRefundTransactionLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetRefundTransactionLogResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetRefundTransactionLog proxyGetRefundTransactionLog;
    public ObjectGetRefundTransactionLogResponse withProxyGetRefundTransactionLog(openapisdk.models.shared.ProxyGetRefundTransactionLog proxyGetRefundTransactionLog) {
        this.proxyGetRefundTransactionLog = proxyGetRefundTransactionLog;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetRefundTransactionLogResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetRefundTransactionLogResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetRefundTransactionLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}