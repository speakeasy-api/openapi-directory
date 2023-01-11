package openapisdk.models.operations;



public class ReplaceChannelModeratorsResponse {
    public String contentType;
    public ReplaceChannelModeratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplaceChannelModeratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ReplaceChannelModeratorsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public ReplaceChannelModeratorsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public ReplaceChannelModeratorsResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}