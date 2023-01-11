package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class PresetsUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}