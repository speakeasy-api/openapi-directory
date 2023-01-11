package openapisdk.models.operations;



public class GroupsAddMemberResponse {
    public String contentType;
    public GroupsAddMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsAddMemberResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsAddMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}