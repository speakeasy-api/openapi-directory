package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsRecommendedChannels
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class VideoVersionsUserMetadataConnectionsRecommendedChannels {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsRecommendedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsRecommendedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsRecommendedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}