package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class CommentUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}