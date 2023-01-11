package openapisdk.models.operations;



public class ApplicationsRemoveOwnerResponse {
    public String contentType;
    public ApplicationsRemoveOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsRemoveOwnerResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsRemoveOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}