package openapisdk.models.operations;



public class GroupsIsMemberOfResponse {
    public java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipResult;
    public GroupsIsMemberOfResponse withCheckGroupMembershipResult(java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipResult) {
        this.checkGroupMembershipResult = checkGroupMembershipResult;
        return this;
    }
    public String contentType;
    public GroupsIsMemberOfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsIsMemberOfResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsIsMemberOfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}