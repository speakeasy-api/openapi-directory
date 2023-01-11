package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsWatchlater
 * Information about the videos that this user wants to watch later.
**/
public class OnDemandSeasonUserMetadataConnectionsWatchlater {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsWatchlater withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}