package openapisdk.models.operations;



public class ApplicationsAddOwnerResponse {
    public String contentType;
    public ApplicationsAddOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsAddOwnerResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsAddOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}