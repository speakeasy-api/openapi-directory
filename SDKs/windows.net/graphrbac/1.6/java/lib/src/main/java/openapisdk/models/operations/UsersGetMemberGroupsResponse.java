package openapisdk.models.operations;



public class UsersGetMemberGroupsResponse {
    public String contentType;
    public UsersGetMemberGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public UsersGetMemberGroupsResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public UsersGetMemberGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGetMemberGroupsResult userGetMemberGroupsResult;
    public UsersGetMemberGroupsResponse withUserGetMemberGroupsResult(openapisdk.models.shared.UserGetMemberGroupsResult userGetMemberGroupsResult) {
        this.userGetMemberGroupsResult = userGetMemberGroupsResult;
        return this;
    }
}