package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsRecommendedUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoUserMetadataConnectionsRecommendedUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsRecommendedUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}