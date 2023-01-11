package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class OnDemandSeasonUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}