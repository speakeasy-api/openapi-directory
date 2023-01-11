package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class VideoVersionsUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}