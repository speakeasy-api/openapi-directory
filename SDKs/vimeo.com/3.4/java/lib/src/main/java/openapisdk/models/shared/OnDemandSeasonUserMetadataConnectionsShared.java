package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class OnDemandSeasonUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}