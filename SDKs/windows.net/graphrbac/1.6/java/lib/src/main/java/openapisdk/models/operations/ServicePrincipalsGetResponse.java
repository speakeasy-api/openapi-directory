package openapisdk.models.operations;



public class ServicePrincipalsGetResponse {
    public String contentType;
    public ServicePrincipalsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsGetResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> servicePrincipal;
    public ServicePrincipalsGetResponse withServicePrincipal(java.util.Map<String, java.util.Map<String, Object>> servicePrincipal) {
        this.servicePrincipal = servicePrincipal;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}