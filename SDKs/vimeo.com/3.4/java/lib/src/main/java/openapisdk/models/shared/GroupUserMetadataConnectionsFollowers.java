package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class GroupUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}