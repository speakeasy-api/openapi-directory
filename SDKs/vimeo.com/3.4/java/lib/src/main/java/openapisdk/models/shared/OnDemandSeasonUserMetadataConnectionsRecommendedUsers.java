package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsRecommendedUsers
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class OnDemandSeasonUserMetadataConnectionsRecommendedUsers {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsRecommendedUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsRecommendedUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsRecommendedUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}