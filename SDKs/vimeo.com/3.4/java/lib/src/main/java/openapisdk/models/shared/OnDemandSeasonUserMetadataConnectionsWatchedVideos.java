package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsWatchedVideos
 * Information about the videos that this user has watched.
**/
public class OnDemandSeasonUserMetadataConnectionsWatchedVideos {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsWatchedVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsWatchedVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsWatchedVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}