package openapisdk.models.operations;



public class ServicePrincipalsUpdateKeyCredentialsResponse {
    public String contentType;
    public ServicePrincipalsUpdateKeyCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsUpdateKeyCredentialsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsUpdateKeyCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}