package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagMetadataConnectionsVideos
 * Information about the videos related to this tag.
**/
public class TagMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public TagMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public TagMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public TagMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}