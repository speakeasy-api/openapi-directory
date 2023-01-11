package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class GroupUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}