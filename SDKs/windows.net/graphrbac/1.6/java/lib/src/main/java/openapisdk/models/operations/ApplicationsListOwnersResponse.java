package openapisdk.models.operations;



public class ApplicationsListOwnersResponse {
    public String contentType;
    public ApplicationsListOwnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public ApplicationsListOwnersResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ApplicationsListOwnersResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ApplicationsListOwnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}