package openapisdk.models.operations;



public class ApplicationsDeleteResponse {
    public String contentType;
    public ApplicationsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsDeleteResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}