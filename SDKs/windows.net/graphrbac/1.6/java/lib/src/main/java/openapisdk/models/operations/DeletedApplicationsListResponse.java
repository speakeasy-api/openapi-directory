package openapisdk.models.operations;



public class DeletedApplicationsListResponse {
    public openapisdk.models.shared.ApplicationListResult applicationListResult;
    public DeletedApplicationsListResponse withApplicationListResult(openapisdk.models.shared.ApplicationListResult applicationListResult) {
        this.applicationListResult = applicationListResult;
        return this;
    }
    public String contentType;
    public DeletedApplicationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public DeletedApplicationsListResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public DeletedApplicationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}