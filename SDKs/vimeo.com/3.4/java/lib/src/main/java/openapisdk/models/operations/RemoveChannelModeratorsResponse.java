package openapisdk.models.operations;



public class RemoveChannelModeratorsResponse {
    public String contentType;
    public RemoveChannelModeratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveChannelModeratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public RemoveChannelModeratorsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User user;
    public RemoveChannelModeratorsResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}