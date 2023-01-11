package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class GroupUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}