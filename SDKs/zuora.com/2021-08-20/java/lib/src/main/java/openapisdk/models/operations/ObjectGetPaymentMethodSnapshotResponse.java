package openapisdk.models.operations;



public class ObjectGetPaymentMethodSnapshotResponse {
    public String contentType;
    public ObjectGetPaymentMethodSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetPaymentMethodSnapshotResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetPaymentMethodSnapshot proxyGetPaymentMethodSnapshot;
    public ObjectGetPaymentMethodSnapshotResponse withProxyGetPaymentMethodSnapshot(openapisdk.models.shared.ProxyGetPaymentMethodSnapshot proxyGetPaymentMethodSnapshot) {
        this.proxyGetPaymentMethodSnapshot = proxyGetPaymentMethodSnapshot;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetPaymentMethodSnapshotResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetPaymentMethodSnapshotResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetPaymentMethodSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}