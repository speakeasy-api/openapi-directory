package openapisdk.models.operations;



public class ObjectGetBillRunResponse {
    public String contentType;
    public ObjectGetBillRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetBillRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetBillRun proxyGetBillRun;
    public ObjectGetBillRunResponse withProxyGetBillRun(openapisdk.models.shared.ProxyGetBillRun proxyGetBillRun) {
        this.proxyGetBillRun = proxyGetBillRun;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetBillRunResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetBillRunResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetBillRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}