package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoProjectMetadataConnectionsVideos
 * A standard connection object indicating how to get all the videos in this project.
**/
public class OnDemandPageVideoProjectMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoProjectMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoProjectMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoProjectMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}