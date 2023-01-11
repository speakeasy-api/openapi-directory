package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsRecommendedUsers
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class UserMetadataConnectionsRecommendedUsers {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsRecommendedUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsRecommendedUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsRecommendedUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}