package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class VideoVersionsUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}