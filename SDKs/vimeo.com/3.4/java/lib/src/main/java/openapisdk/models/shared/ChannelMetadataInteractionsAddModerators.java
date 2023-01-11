package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataInteractionsAddModerators
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
**/
public class ChannelMetadataInteractionsAddModerators {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataInteractionsAddModerators withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataInteractionsAddModerators withUri(String uri) {
        this.uri = uri;
        return this;
    }
}