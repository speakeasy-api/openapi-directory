package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class VideoUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}