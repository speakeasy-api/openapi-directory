package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class CommentUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}