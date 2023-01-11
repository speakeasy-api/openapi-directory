package openapisdk.models.operations;



public class GroupsGetGroupMembersResponse {
    public String contentType;
    public GroupsGetGroupMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public GroupsGetGroupMembersResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsGetGroupMembersResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsGetGroupMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}