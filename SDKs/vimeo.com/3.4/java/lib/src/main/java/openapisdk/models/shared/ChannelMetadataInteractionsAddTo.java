package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataInteractionsAddTo
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
**/
public class ChannelMetadataInteractionsAddTo {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataInteractionsAddTo withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataInteractionsAddTo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}