package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsChannel
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
public class OnDemandPageVideoMetadataInteractionsChannel {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataInteractionsChannel withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsChannel withUri(String uri) {
        this.uri = uri;
        return this;
    }
}