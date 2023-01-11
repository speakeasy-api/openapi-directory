package openapisdk.models.operations;



public class GroupsRemoveMemberResponse {
    public String contentType;
    public GroupsRemoveMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsRemoveMemberResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsRemoveMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}