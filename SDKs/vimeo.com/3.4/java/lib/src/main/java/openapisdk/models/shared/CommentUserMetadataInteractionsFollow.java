package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class CommentUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public CommentUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}