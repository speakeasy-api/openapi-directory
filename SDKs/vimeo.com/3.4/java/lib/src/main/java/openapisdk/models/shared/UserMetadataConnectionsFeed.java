package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class UserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}