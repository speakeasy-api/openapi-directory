package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class CommentUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public CommentUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public CommentUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}