package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class VideoVersionsUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}