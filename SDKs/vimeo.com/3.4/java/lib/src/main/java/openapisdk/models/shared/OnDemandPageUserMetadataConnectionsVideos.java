package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class OnDemandPageUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}