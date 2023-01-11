package openapisdk.models.operations;



public class DeletedApplicationsRestoreResponse {
    public java.util.Map<String, java.util.Map<String, Object>> application;
    public DeletedApplicationsRestoreResponse withApplication(java.util.Map<String, java.util.Map<String, Object>> application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public DeletedApplicationsRestoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public DeletedApplicationsRestoreResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public DeletedApplicationsRestoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}