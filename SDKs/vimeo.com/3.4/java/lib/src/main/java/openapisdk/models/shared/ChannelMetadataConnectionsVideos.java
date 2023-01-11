package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataConnectionsVideos
 * Information about the videos that belong to this channel.
**/
public class ChannelMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public ChannelMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}