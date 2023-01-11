package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsFeed
 * Information about this user's feed.
**/
public class OnDemandSeasonUserMetadataConnectionsFeed {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsFeed withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsFeed withUri(String uri) {
        this.uri = uri;
        return this;
    }
}