package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class CommentUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public CommentUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}