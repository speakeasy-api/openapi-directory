package openapisdk.models.operations;



public class ServicePrincipalsRemoveOwnerResponse {
    public String contentType;
    public ServicePrincipalsRemoveOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsRemoveOwnerResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsRemoveOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}