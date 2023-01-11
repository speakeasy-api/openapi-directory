package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataInteractionsModerateVideos
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
**/
public class ChannelMetadataInteractionsModerateVideos {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataInteractionsModerateVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataInteractionsModerateVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}