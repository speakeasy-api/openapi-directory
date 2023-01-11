package openapisdk.models.operations;



public class ServicePrincipalsListOwnersResponse {
    public String contentType;
    public ServicePrincipalsListOwnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult;
    public ServicePrincipalsListOwnersResponse withDirectoryObjectListResult(openapisdk.models.shared.DirectoryObjectListResult directoryObjectListResult) {
        this.directoryObjectListResult = directoryObjectListResult;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public ServicePrincipalsListOwnersResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public ServicePrincipalsListOwnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}