package openapisdk.models.operations;



public class SignedInUserListOwnedObjectsResponse {
    public String contentType;
    public SignedInUserListOwnedObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public SignedInUserListOwnedObjectsResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public SignedInUserListOwnedObjectsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public SignedInUserListOwnedObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}