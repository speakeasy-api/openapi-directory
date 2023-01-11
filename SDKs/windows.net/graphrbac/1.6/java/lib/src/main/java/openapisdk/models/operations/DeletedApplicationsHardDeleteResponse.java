package openapisdk.models.operations;



public class DeletedApplicationsHardDeleteResponse {
    public String contentType;
    public DeletedApplicationsHardDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public DeletedApplicationsHardDeleteResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public DeletedApplicationsHardDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}