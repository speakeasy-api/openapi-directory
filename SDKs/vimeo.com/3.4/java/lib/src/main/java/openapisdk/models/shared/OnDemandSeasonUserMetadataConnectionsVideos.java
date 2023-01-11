package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class OnDemandSeasonUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}