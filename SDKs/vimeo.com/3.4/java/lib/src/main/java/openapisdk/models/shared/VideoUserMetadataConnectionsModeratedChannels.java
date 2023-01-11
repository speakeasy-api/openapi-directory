package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsModeratedChannels
 * Information about the channels that this user moderates.
**/
public class VideoUserMetadataConnectionsModeratedChannels {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsModeratedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsModeratedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsModeratedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}