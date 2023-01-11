package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class GroupUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}