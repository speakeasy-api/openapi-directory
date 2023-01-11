package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class CommentUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}