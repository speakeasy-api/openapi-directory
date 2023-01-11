package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class OnDemandPageUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}