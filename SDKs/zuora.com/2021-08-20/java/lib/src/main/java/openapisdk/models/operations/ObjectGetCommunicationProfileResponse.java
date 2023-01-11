package openapisdk.models.operations;



public class ObjectGetCommunicationProfileResponse {
    public String contentType;
    public ObjectGetCommunicationProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetCommunicationProfileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetCommunicationProfile proxyGetCommunicationProfile;
    public ObjectGetCommunicationProfileResponse withProxyGetCommunicationProfile(openapisdk.models.shared.ProxyGetCommunicationProfile proxyGetCommunicationProfile) {
        this.proxyGetCommunicationProfile = proxyGetCommunicationProfile;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetCommunicationProfileResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetCommunicationProfileResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetCommunicationProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}