package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsChannel
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
public class VideoMetadataInteractionsChannel {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataInteractionsChannel withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsChannel withUri(String uri) {
        this.uri = uri;
        return this;
    }
}