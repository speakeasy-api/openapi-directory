package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class CommentUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}