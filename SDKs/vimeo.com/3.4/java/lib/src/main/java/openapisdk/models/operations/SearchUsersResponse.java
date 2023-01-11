package openapisdk.models.operations;



public class SearchUsersResponse {
    public String contentType;
    public SearchUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public SearchUsersResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public SearchUsersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}