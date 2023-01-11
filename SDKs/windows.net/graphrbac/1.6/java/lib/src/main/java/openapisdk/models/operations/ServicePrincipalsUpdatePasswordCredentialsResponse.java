package openapisdk.models.operations;



public class ServicePrincipalsUpdatePasswordCredentialsResponse {
    public String contentType;
    public ServicePrincipalsUpdatePasswordCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsUpdatePasswordCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsUpdatePasswordCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}