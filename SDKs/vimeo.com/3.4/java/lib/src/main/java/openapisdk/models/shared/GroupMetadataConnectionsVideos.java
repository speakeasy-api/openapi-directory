package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadataConnectionsVideos
 * Information about the videos contained within this group.
**/
public class GroupMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public GroupMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}