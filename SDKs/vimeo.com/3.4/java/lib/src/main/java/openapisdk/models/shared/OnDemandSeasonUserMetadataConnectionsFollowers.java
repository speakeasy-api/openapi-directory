package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class OnDemandSeasonUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}