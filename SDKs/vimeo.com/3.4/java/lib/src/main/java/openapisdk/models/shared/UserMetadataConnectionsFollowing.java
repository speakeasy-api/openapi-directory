package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class UserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}