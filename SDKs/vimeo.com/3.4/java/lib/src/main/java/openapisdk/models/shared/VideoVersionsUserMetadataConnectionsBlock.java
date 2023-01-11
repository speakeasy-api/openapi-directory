package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsBlock
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
public class VideoVersionsUserMetadataConnectionsBlock {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsBlock withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}