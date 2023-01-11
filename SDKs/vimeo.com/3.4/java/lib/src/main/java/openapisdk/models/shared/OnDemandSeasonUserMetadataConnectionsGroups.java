package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class OnDemandSeasonUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}