package openapisdk.models.operations;



public class ObjectGetPaymentMethodResponse {
    public String contentType;
    public ObjectGetPaymentMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetPaymentMethodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetPaymentMethod proxyGetPaymentMethod;
    public ObjectGetPaymentMethodResponse withProxyGetPaymentMethod(openapisdk.models.shared.ProxyGetPaymentMethod proxyGetPaymentMethod) {
        this.proxyGetPaymentMethod = proxyGetPaymentMethod;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetPaymentMethodResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetPaymentMethodResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetPaymentMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}