package openapisdk.models.operations;



public class GroupsListResponse {
    public String contentType;
    public GroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsListResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public openapisdk.models.shared.GroupListResult groupListResult;
    public GroupsListResponse withGroupListResult(openapisdk.models.shared.GroupListResult groupListResult) {
        this.groupListResult = groupListResult;
        return this;
    }
    public Long statusCode;
    public GroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}