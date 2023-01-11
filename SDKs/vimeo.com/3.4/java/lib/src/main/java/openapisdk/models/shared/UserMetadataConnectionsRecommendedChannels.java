package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsRecommendedChannels
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class UserMetadataConnectionsRecommendedChannels {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsRecommendedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsRecommendedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsRecommendedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}