package openapisdk.models.operations;



public class GroupsListOwnersResponse {
    public String contentType;
    public GroupsListOwnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public GroupsListOwnersResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsListOwnersResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsListOwnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}