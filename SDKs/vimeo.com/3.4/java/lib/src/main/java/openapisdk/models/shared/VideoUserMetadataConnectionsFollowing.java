package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class VideoUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}