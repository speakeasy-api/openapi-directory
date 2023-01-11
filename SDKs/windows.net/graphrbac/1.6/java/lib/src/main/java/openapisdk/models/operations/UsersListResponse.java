package openapisdk.models.operations;



public class UsersListResponse {
    public String contentType;
    public UsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public UsersListResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public UsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserListResult userListResult;
    public UsersListResponse withUserListResult(openapisdk.models.shared.UserListResult userListResult) {
        this.userListResult = userListResult;
        return this;
    }
}