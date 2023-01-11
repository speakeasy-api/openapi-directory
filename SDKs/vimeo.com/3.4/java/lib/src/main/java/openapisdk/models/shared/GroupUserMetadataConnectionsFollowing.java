package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class GroupUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}