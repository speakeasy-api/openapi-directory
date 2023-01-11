package openapisdk.models.operations;



public class GroupsDeleteResponse {
    public String contentType;
    public GroupsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsDeleteResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}