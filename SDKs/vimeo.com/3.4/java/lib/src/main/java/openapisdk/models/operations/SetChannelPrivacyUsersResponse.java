package openapisdk.models.operations;



public class SetChannelPrivacyUsersResponse {
    public String contentType;
    public SetChannelPrivacyUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetChannelPrivacyUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SetChannelPrivacyUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public SetChannelPrivacyUsersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}