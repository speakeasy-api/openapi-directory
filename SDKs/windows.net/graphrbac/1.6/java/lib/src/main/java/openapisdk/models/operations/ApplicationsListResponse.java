package openapisdk.models.operations;



public class ApplicationsListResponse {
    public openapisdk.models.shared.ApplicationListResult applicationListResult;
    public ApplicationsListResponse withApplicationListResult(openapisdk.models.shared.ApplicationListResult applicationListResult) {
        this.applicationListResult = applicationListResult;
        return this;
    }
    public String contentType;
    public ApplicationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsListResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}