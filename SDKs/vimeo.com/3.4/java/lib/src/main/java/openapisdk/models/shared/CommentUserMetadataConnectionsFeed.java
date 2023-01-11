package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class CommentUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}