package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonMetadataConnectionsVideos
 * The Videos connection.
**/
public class OnDemandSeasonMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}