package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class CommentUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}