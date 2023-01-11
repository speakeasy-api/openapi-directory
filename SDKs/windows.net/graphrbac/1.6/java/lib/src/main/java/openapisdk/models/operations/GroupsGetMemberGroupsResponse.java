package openapisdk.models.operations;



public class GroupsGetMemberGroupsResponse {
    public String contentType;
    public GroupsGetMemberGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsGetMemberGroupsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.GroupGetMemberGroupsResult groupGetMemberGroupsResult;
    public GroupsGetMemberGroupsResponse withGroupGetMemberGroupsResult(openapisdk.models.shared.GroupGetMemberGroupsResult groupGetMemberGroupsResult) {
        this.groupGetMemberGroupsResult = groupGetMemberGroupsResult;
        return this;
    }
    public Long statusCode;
    public GroupsGetMemberGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}