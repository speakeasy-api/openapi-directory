package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectMetadataConnectionsVideos
 * A standard connection object indicating how to get all the videos in this project.
**/
public class ProjectMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public ProjectMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public ProjectMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ProjectMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}