package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class PresetsUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}