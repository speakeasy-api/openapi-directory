package openapisdk.models.operations;



public class ServicePrincipalsCreateResponse {
    public String contentType;
    public ServicePrincipalsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsCreateResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> servicePrincipal;
    public ServicePrincipalsCreateResponse withServicePrincipal(java.util.Map<String, java.util.Map<String, Object>> servicePrincipal) {
        this.servicePrincipal = servicePrincipal;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}