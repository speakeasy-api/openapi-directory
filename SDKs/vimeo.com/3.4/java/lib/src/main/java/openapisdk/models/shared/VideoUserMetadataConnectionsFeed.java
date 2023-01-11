package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class VideoUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}