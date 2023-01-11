package openapisdk.models.operations;



public class ObjectsGetObjectsByObjectIdsResponse {
    public String contentType;
    public ObjectsGetObjectsByObjectIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public ObjectsGetObjectsByObjectIdsResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public Long statusCode;
    public ObjectsGetObjectsByObjectIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}