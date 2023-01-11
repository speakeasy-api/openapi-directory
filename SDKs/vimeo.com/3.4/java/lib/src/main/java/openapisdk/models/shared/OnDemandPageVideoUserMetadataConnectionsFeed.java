package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class OnDemandPageVideoUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}